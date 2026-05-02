import { useState, useEffect } from "react";

// ============================================================
// WEEK 3: Uncomment these two imports AFTER setting up Firebase:
// ============================================================
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../firebase";

// ============================================================
// SAMPLE MENU DATA
// This lets the menu page work BEFORE Firebase is set up.
// In Week 3, you will delete this and load from Firebase instead.
//
// TODO (Week 2): You can update these items to match YOUR
// restaurant if you want, but it's not required yet.
// ============================================================
const sampleMenuItems = [
  {
    id: "1",
    name: "Sample Item One",
    description: "This is a placeholder menu item. Replace with your own in Firebase.",
    price: 12.99,
    category: "Appetizers",
  },
  {
    id: "2",
    name: "Sample Item Two",
    description: "Another placeholder item. Your real menu items go in Firebase.",
    price: 15.99,
    category: "Appetizers",
  },
  {
    id: "3",
    name: "Sample Entree",
    description: "A delicious placeholder entree. Your items will look much better!",
    price: 22.99,
    category: "Entrees",
  },
  {
    id: "4",
    name: "Another Entree",
    description: "Yet another placeholder. Add your real items to Firestore in Week 3.",
    price: 18.99,
    category: "Entrees",
  },
  {
    id: "5",
    name: "Sample Dessert",
    description: "A sweet placeholder treat. Your desserts will be much more creative!",
    price: 8.99,
    category: "Desserts",
  },
  {
    id: "6",
    name: "Another Dessert",
    description: "The last placeholder item. Replace all of these with Firebase data!",
    price: 9.99,
    category: "Desserts",
  },
];

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMenu() {
      try {
        // ==========================================================
        // WEEK 3: FIREBASE VERSION
        // Uncomment the block below and DELETE the sample data block
        // AFTER you set up Firebase and add your menu items.
        // ==========================================================
        // const querySnapshot = await getDocs(collection(db, "menuItems"));
        // const items = querySnapshot.docs.map((doc) => ({
        //   id: doc.id,
        //   ...doc.data(),
        // }));
        // setMenuItems(items);

        // ==========================================================
        // SAMPLE DATA VERSION (delete this block in Week 3)
        // ==========================================================
        await new Promise((resolve) => setTimeout(resolve, 500));
        setMenuItems(sampleMenuItems);
      } catch (err) {
        console.error("Error fetching menu:", err);
        setError("Failed to load menu. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    fetchMenu();
  }, []);

  if (loading) {
    return (
      <div className="page">
        <p className="loading-message">Loading menu...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page">
        <p className="error-message">{error}</p>
      </div>
    );
  }

  // Group items by category
  const categories = [...new Set(menuItems.map((item) => item.category))];

  return (
    <div className="page">
      <div className="menu-header">
        {/* TODO: Customize this heading for YOUR restaurant */}
        <h1>Our Menu</h1>
        <p>[Add a short description of your menu here]</p>
      </div>

      {categories.map((category) => (
        <div key={category} className="menu-category">
          <h2>{category}</h2>
          <div className="menu-items">
            {menuItems
              .filter((item) => item.category === category)
              .map((item) => (
                <div key={item.id} className="menu-item">
                  <h3>{item.name}</h3>
                  <p className="description">{item.description}</p>
                  <p className="price">${item.price.toFixed(2)}</p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;
