import Link from 'next/link'


function MyName() {
    return <p>Name: Jason Marshall</p>;
}


function MyCourse() {
    return <p>Course section: CPRG 306A</p>;
}


function GitHubLink() {
    return <Link href= "https://github.com/JasonLMarshall/cprg306-assignments">https://github.com/JasonLMarshall/cprg306-assignments</Link>
}

export default function StudentInfo() {
    return (
        <ul>
            < MyName />
            < MyCourse />
            < GitHubLink />
        </ul>
    );
}
