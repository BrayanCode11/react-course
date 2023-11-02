export function TaskCard() {
  const cardStyle = {
    background: "#202020",
    color: "#fff",
    padding: "20px",
    borderRadius: "5px",
    width: "300px",
    height: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const titleStyle = {
    fontSize: "20px",
    margin: "0px",
  };

  return (
    <div style={cardStyle}>
      <h1 style={titleStyle}>Mi primer tarea</h1>
      <p>Tarea relizada</p>
    </div>
  );
}
