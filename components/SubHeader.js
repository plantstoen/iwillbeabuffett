export default function Header(props) {
  return (
    <div>
      <span className="subheader">{props.children}</span>
      <style jsx>{`
        .subheader {
          font-size: 25px;
          font-weight: bold;
          color: #c1c1c1;
          font-style: italic;
        }
      `}</style>
    </div>
  );
}
