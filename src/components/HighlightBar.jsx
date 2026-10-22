export function HighlightBar({ bar, onHighlight, onClear }) {
  if (!bar.visible) return null;
  return (<div id="hlBar" className="on" style={{ top: bar.top, left: bar.left }}><button type="button" className="hl-main" onClick={onHighlight}><span>🖍️</span><span>Highlight</span></button><button type="button" onClick={onClear}>Clear all</button></div>);
}
