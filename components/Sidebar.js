export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="container-fluid">
                <div className="row">
                    <h3>Skills:</h3>
                    <div className="col">
                    <ul>
                        <li>Distributed Systems</li>
                        <li>Cloud Computing</li>
                        <li>Reactive Programing</li>
                        <li>Object Oriented Programing</li>
                        <li>Problem Solving</li>
                    </ul>

                    </div>
                    

                </div>
                <div className="row">
                    <h3>Languages & Frameworks:</h3>
                    <div className="col-sm-6">
                        <ul>
                            <li>Java 17</li>
                            <li>Spring Framework</li>
                            <li>RxJava</li>
                            <li>noSql</li>
                            <li>Sql</li>
                        </ul>

                    </div>
                    <div className="col-sm-6">
                        <ul>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>Angular</li>
                            <li>Bootstrap</li>
                            <li>Html</li>
                        </ul>

                    </div>


                </div>
                <div className="row">
                    <h3>Education:</h3>
                    <ul>
                        <li>
                            Bachlor's of Technology (2015)
                        </li>
                        <li>Electronics and Communication</li>
                        <li>
                            CGPA: 7.8
                        </li>
                    </ul>

                </div>

            </div>
        </div>
    )
}