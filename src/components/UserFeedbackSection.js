import React from 'react';

const UserFeedbackSection = () => {
  return (
    <section>
      <h2>User feedback</h2>
      <div style={{ margin: '20px 0' }}>
        <p>Please fill out the form below to provide your feedback:</p>
        <form>
          <label htmlFor="feedback" style={{ marginRight: '10px' }}>Feedback:</label>
          <textarea id="feedback" name="feedback" rows="4" cols="50" style={{ marginBottom: '10px' }}></textarea>
          <button type="submit" style={{ padding: '5px 10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' } }>Submit feedback</button>
        </form>
      </div>
    </section>
  );
}

export default UserFeedbackSection;