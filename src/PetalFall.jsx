
export default function PetalFall() {
  return (
    <div className="fall-container" aria-hidden="true">
      <div className="falling">
        {Array.from({ length: 40 }, (_, i) => (
          <div className="item flower" key={i}>
            <div className="item-inner"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
