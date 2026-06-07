import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import admin from "firebase-admin";

// Initialize Firebase Admin
if (admin.apps.length === 0) {
  admin.initializeApp();
}

const db = admin.firestore();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  
  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Receive product information from Website POS
  app.post("/api/sync-products", async (req, res) => {
    try {
      const { products } = req.body;
      
      if (!Array.isArray(products)) {
        return res.status(400).json({ error: "Products should be an array" });
      }

      const batch = db.batch();
      
      products.forEach((product: any) => {
        const productRef = db.collection("products").doc(product.id || db.collection("products").doc().id);
        batch.set(productRef, {
          ...product,
          updatedAt: admin.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
      });

      await batch.commit();
      res.json({ message: `Successfully synced ${products.length} products` });
    } catch (error: any) {
      console.error("Sync error:", error);
      res.status(500).json({ error: error.message });
    }
  });

  // Create a single product
  app.post("/api/products", async (req, res) => {
    try {
      const productData = req.body;
      const docRef = await db.collection("products").add({
        ...productData,
        updatedAt: admin.firestore.FieldValue.serverTimestamp()
      });
      res.json({ id: docRef.id, ...productData });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
