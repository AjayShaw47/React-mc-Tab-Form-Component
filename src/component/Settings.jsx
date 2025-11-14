export default function Setting({ data, setData }) {
  const { theme } = data;
  function handleOnChange(value) {
    setData((prevData) => ({
      ...prevData,
      theme: value,
    }));
  }
  return (
    <div>
      <label htmlFor="theme">Dark</label>
      <input
        type="radio"
        name="theme"
        value="dark"
        checked={theme == "dark"}
        onChange={(e) => handleOnChange(e.target.value)}
      />
      <label htmlFor="theme">Light</label>
      <input
        type="radio"
        name="theme"
        value="light"
        checked={theme == "light"}
        onChange={(e) => handleOnChange(e.target.value)}
      />
    </div>
  );
}
