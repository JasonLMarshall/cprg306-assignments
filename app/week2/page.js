import StudentInfo from '../studentInfo.js';

function Shopping() {
    return <h1>My Shopping List</h1>;
}

export default function Week2() {
    return (
      <section>
        <div>
          <Shopping/>
        </div>
  
        <div>
          <StudentInfo/>
        </div>
  
        
      </section>
    );
  }