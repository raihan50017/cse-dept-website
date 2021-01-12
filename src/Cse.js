import React from 'react';
import './Cse.css';

const Cse = () => {
    return (
        <div className="cse-section">
            <div className="cse-container">
                <h1>Dept of Computer Science and Engineering</h1>
            </div>
            <div className="col-lg-12">
                <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link" href="#t1body1" aria-controls="t1body1" role="tab" data-toggle="tab" aria-aria-expanded="false">
                            <i className="fa fa-envelop-open fa-fw"></i>
                            "Message from department head"
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="t1body2" aria-controls="t1body2" role="tab" data-toggle="tab" aria-aria-expanded="false">
                            <i className="fa fa-clipboard fa-fw"></i>
                            "Notice Board"
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="t1body3" aria-controls="t1body3" role="tab" data-toggle="tab" aria-aria-expanded="false">
                            <i className="fa fa-graduation-cap fa-fw"></i>
                            "Our Teachers"
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="t1body4" aria-controls="t1body4" role="tab" data-toggle="tab" aria-aria-expanded="false">
                            <i className="fa fa-users fa-fw"></i>
                            "Officers & Staffs"
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="t1body5" aria-controls="t1body5" role="tab" data-toggle="tab" aria-aria-expanded="false">
                            <i className="fa fa-users fa-fw"></i>
                            "Alumni"
                        </a>
                    </li>
                </ul>
                <div className="tab-contant">
                    <div role="tabpanel" className="tab-pane fade" id="t1body1" aria-expanded="false">
                        <p>
                        Jatiya Kabi Kazi Nazrul Islam University was established by the Government of Bangladesh on 01 March 2005. The academic program of this university started on 03 June 2007 with four departments under two Faculties. The department of Computer Science and Engineering is one of them. The development of the present state of the society greatly depends on technological improvement.
                        </p>
                    </div>
                    <div role="tabpanel" className="tab-pane fade" id="t1body2" aria-expanded="false"></div>
                    <div role="tabpanel" className="tab-pane fade" id="t1body3" aria-expanded="false"></div>
                    <div role="tabpanel" className="tab-pane fade" id="t1body4" aria-expanded="false"></div>
                    <div role="tabpanel" className="tab-pane fade" id="t1body5" aria-expanded="false"></div>
                </div>
            </div>
        </div>
    );
};

export default Cse;