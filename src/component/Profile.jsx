export default function Profile({ data, setData, error }) {
  const { name, email, age } = data;
  function handleOnChange(e, field) {
    setData((preState) => ({
      ...preState,
      [field]: e.target.value,
    }));
  }
  return (
    <div>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => handleOnChange(e, "name")}
        />
        {error.name && <span className="error">{error.name}</span>}
      </div>

      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          value={email}
          onChange={(e) => handleOnChange(e, "email")}
        />
        {error.email && <span className="error">{error.email}</span>}
      </div>

      <div>
        <label htmlFor="age">Age: </label>
        <input
          type="number"
          value={age}
          onChange={(e) => handleOnChange(e, "age")}
        />
        {error.age && <span className="error">{error.age}</span>}
      </div>
    </div>
  );
}
