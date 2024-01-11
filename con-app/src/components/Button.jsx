
const Button = ({func, bgcolor="green", bradius="5px", cname, children}) => {
    const style = {
        backgroundColor: bgcolor,
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: bradius,
        cursor: "pointer",
        fontSize: "1rem",
        fontWeight: "bold",
        margin: "10px",
    }
  return (
    <button onClick={func} className={cname} style={style}>{children}</button>
  )
}

export default Button