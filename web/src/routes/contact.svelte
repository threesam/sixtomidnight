<h1>Contact</h1>

<form name="contact" method="POST" data-netlify="true" netlify-honeypot=“bot-field”>
  <input type="hidden" name="form-name" value="contact" /> 

  <div>
    <label for="name">Name</label>
    <input type="name" name="name" />
  </div>

  <div>
    <label for="email">Email</label>
    <input type="email" name="email" />
  </div>

  <div>
    <label for="development-type">Development type</label>
    <select name="development-type" multiple>
      <option value="web-development">Web</option>
      <option value="artist-development">Artist</option>
      <option value="community-development">Community</option>
    </select>
  </div>

  <div>
    <label for="message">Message</label>
    <textarea name="message" />
  </div>

  <button type="submit">Send</button>
</form>
  