import "./Numbers.css";

function Numbers() {
  const numArray = [
    78, 57, 23, 54, 68, 33, 26, 79, 16, 4, 34, 76, 77, 24, 8, 99,
  ];

  return (
    <div className="Numbers">
      <ul>
        {numArray.map((number, i) => (
          <li
            key={number + i}
            style={{ backgroundColor: number % 2 == 0 ? "greenyellow" : "red" }}
          >
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Numbers;
