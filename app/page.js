import StudentInfo from './studentInfo.js';
import Link from 'next/link'

function Week2Link() {
  return <Link href= "./week2">Week 2</Link>
}

export default function Page() {
  return (
    <main>
      <div>
        <h1 className = "text-4xl">CPRG 306: Web Development 2 - Assignments</h1>
      </div>

      <div>
        <StudentInfo/>
      </div>

      <div>
        <Week2Link/>
      </div>
    </main>
  );
}

