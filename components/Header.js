export default function Header(props) {
  return (
    <div>
      <span className="header">{props.children}</span>
      <style jsx>{`
        .header {
          font-size: 40px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
