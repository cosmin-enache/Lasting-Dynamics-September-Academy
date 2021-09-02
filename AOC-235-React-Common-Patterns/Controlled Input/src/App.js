import "./styles.css";
import { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    email: ""
  });

  const handleSubmit = event => {
    event.preventDefault();
    alert(JSON.stringify(formData, null, 4));
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setFormData({ [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" value={formData.email} onChange={handleChange} />
      <input type="submit" />
    </form>
  );
};

export default App;