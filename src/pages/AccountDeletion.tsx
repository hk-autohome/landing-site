import AutoHomeNavbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";

export function AccountDeletionPage() {
  return (
    <>
      <AutoHomeNavbar />
      <div style={{ padding: "20px", maxWidth: "1200px", margin: "auto", marginTop: 150 }}>
        <h1>How to Delete Your Account</h1>
        <p style={{ fontWeight: "bold", color: "#e74c3c" }}>
          Warning: This action cannot be undone.
        </p>
        <p>If you delete your account, you will lose all device data immediately. If you re-create a new account, you'll need to add all devices manually again.</p>

        <h2>Steps to Delete Your Account from the Mobile App:</h2>
        <ol>
          <li>Open the app on your mobile device.</li>
          <li>From the left navigation menu, click on <strong>Settings</strong>.</li>
          <li>Scroll down and click on <strong>Delete Account Permanently</strong>.</li>
          <li>Follow the on-screen instructions to confirm the deletion.</li>
        </ol>

        <p style={{ marginTop: "20px" }}>
          If you have any trouble or need assistance, please contact our support team at:
        </p>
        <p>Email: <a href="mailto:code.harshkanjariya@gmail.com">code.harshkanjariya@gmail.com</a></p>
        <p>Phone: <a href="tel:+917802004735">+91 780 2004 735</a></p>
      </div>
      <Footer />
    </>
  );
}

export default AccountDeletionPage;
