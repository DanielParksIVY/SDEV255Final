document.addEventListener("DOMContentLoaded", loadCart);

async function loadCart() {
  try {
    const res = await fetch(`${API_BASE}/cart`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    });

    if (!res.ok) throw new Error("Failed");

    const cart = await res.json();
    const div = document.getElementById("cart");
    div.innerHTML = "";

    cart.forEach(item => {
      const p = document.createElement("p");
      p.textContent = item.courseName;
      div.appendChild(p);
    });
  } catch (err) {
    document.getElementById("cart").innerHTML =
      "<p>Cart unavailable.</p>";
    console.error(err);
  }
}
