# 🧾 Invoice Generator

A simple React-based Invoice Generator that lets you manage items, calculate totals, and generate invoices with ease.  
It supports **manual item management** (add/remove), fetching initial data from a local `data.json` file, and **sorting** based on price or quantity.

---

## ✨ Features
- 📥 **Fetch items** from a local JSON file.
- ➕ **Add** new items manually.
- ➖ **Remove** specific items manually.
- 📊 **Sort** items by **Price** or **Quantity** (ascending/descending).
- 💰 Automatically calculates the **total cost**.
- 🖱 Simple and intuitive interface.

---

## Project Structure
```
├── public/
│   ├── data.json           # Initial items data
├── src/
│   ├── App.js              # Main component logic
│   ├── components/         # (Optional) Reusable components like AddItemForm, ItemList, TotalAmount
├── package.json
├── README.md
```

