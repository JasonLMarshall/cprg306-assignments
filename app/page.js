import StudentInfo from './studentInfo.js';
import Link from 'next/link'

function Week2Link() {
  return <Link href= "./week2">Week 2</Link>
}

function Week3Link() {
  return <Link href= "./week3">Week 3</Link>
}

function Week4Link() {
  return <Link href= "./week4">Week 4</Link>
}

function Week5Link() {
  return <Link href= "./week5">Week 5</Link>
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

      <div>
        <Week3Link/>
      </div>

      <div>
        <Week4Link/>
      </div>

      <div>
        <Week5Link/>
      </div>

    </main>
  );
}

