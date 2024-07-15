export const toAboutView = () => `
<div id="about">
  <div class="content">
    <h1>About the App</h1>
    <div class="team-section">
      <h2>Meet the Team</h2>
      <div class="team-member">
        <img src="./src/data/images/Mario.jpg" alt="Georgi Georgiev">
        <h3>Georgi Georgiev</h3>
      </div>
      <div class="team-member">
        <img src="./src/data/images/Franco.jpg" alt="Berkan Karaveli">
        <h3>Berkan Karaveli</h3>
      </div>
      <div class="team-member">
        <img src="./src/data/images/Oscar.jpg" alt="Yudzhel Pelfan">
        <h3>Yudzhel Pelfan</h3>
      </div>
    </div>
    <div class="timeline-section">
      <h2>Project Timeline</h2>
      <ul class="timeline">
        <li>
          <span>11/07</span>
          <p>Project Inception</p>
        </li>
        <li>
          <span>14/07-15/07</span>
          <p>Design Phase</p>
        </li>
        <li>
          <span>12/07-14/07</span>
          <p>Development Phase</p>
        </li>
        <li>
          <span>15/07-16/07</span>
          <p>Testing and Deployment</p>
        </li>
      </ul>
    </div>
    <div class="technologies-section">
      <h2>Technologies Used</h2>
      <ul class="technologies">
        <li>JavaScript</li>
        <li>HTML & CSS</li>
        <li>Node.js</li>
        <li>Giphy API</li>
      </ul>
    </div>
    <div class="contact-section">
      <h2>Contact Us</h2>
      <p>If you have any questions or feedback, feel free to reach out to us at <a href="mailto:trimaBratq@triSestri.com">trimaBratq@triSestri.com</a>.</p>
    </div>
  </div>
</div>
`;