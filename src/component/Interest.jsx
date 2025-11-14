export default function Interest({ data, setData, error }) {
  const { interest } = data;
  function handleOnChange(e) {
    setData((prevData) => ({
      ...prevData,
      interest: e.target.checked
        ? [...prevData.interest, e.target.value]
        : prevData.interest.filter((ele) => ele != e.target.value),
    }));
  }
  return (
    <div>
      <div>
        <input
          type="checkbox"
          name="interest"
          value="cooking"
          checked={interest.includes("cooking")}
          onChange={handleOnChange}
        />
        <label htmlFor="interest">Cooking</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="interest"
          value="coding"
          checked={interest.includes("coding")}
          onChange={handleOnChange}
        />
        <label htmlFor="interest">Coding</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="interest"
          value="music"
          checked={interest.includes("music")}
          onChange={handleOnChange}
        />
        <label htmlFor="interest">Music</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="interest"
          value="reading"
          checked={interest.includes("reading")}
          onChange={handleOnChange}
        />
        <label htmlFor="interest">Reading</label>
      </div>
      {error.interest && <span className="error">{error.interest}</span>}
    </div>
  );
}
