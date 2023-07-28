const Progress = () => (
  <div className="progress-continer">
    <div className="circular-progress-container">
      <div className="circular-progress"> </div>
    </div>
    <div className="progress-stat">
      <p className="percent-complete">8%</p>
      <p className="completed">Completed</p>
    </div>
    <div className="progress-divider"> </div>
    <div className="current-chapter-container">
      <div>
        <p className="current-chapter-label">CURRENT CHAPTER</p>
        <p className="current-chapter">Introduction</p>
      </div>
      <div><button className="primary-button" type="button">UPDATE PROGRESS</button></div>
    </div>
  </div>
);

export default Progress;
