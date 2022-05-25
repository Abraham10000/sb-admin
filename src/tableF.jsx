import { tableOn } from "./tableOn";
import { tableOff } from "./tableOff";
import { tableBody } from "./tableBody";

export function tablef() {
    return (
        <div className="card mb-4">
                            <tableHeader/>
                            <div className="card-body">
                                <table id="datatablesSimple">
                                    <thead>
                                    <tableOn value1='Name' value2='Positon' value3='Office' value4 ='Age' value5='Start date' value6='Age' />
                                    </thead>
                                    <tfoot>
                                    <tableOff value1='Name' value2='Positon' value3='Office' value4 ='Age' value5='Start date' value6='Age' />
                                    </tfoot>
                                    <tbody>
                                        
                                        <tableBody value1='Tiger Nixon' value2='System Architect' value3='Edinburgh' value4 ='61' value5='2011/04/25' value6='$320.800' />
                                        
                                        <tableBody value1='Garrett Winters' value2='Accountant' value3='Tokyo' value4 ='61' value5='2011/07/25' value6='$170,750' />

                                        <tableBody value1='Ashton Cox' value2='Junior Technical Author' value3='San Francisco' value4 ='66' value5='2009/01/12' value6='$86,000' />

                                        <tableBody value1='Cedric Kelly' value2='Senior Javascript Developer' value3='Edinburgh' value4 ='22' value5='2012/03/29' value6='$433,060' />

                                        <tableBody value1='Airi Satou' value2='Accountant' value3='Tokyo' value4 ='33' value5='2008/11/28' value6='$162,700' />

                                        <tableBody value1='Brielle Williamson' value2='Integration Specialist' value3='New York' value4 ='61' value5='2012/12/02' value6='$372,000' />

                                        <tableBody value1='Herrod Chandler' value2='Sales Assistant' value3='San Francisco' value4 ='59' value5='2012/08/06' value6='$137,500' />

                                        <tableBody value1='Rhona Davidson' value2='Integration Specialist' value3='Tokyo' value4 ='55' value5='2010/10/14' value6='$327,900' />

                                        <tableBody value1='Colleen Hurst' value2='Javascript Developer' value3='San Francisco' value4 ='39' value5='2009/09/15' value6='$205,500' />

                                        <tableBody value1='Sonya Frost' value2='Software Engineer' value3='Edinburgh' value4 ='23' value5='2008/12/13' value6='$103,600' />

                                        <tableBody value1='Jena Gaines' value2='Office Manager' value3='London' value4 ='30' value5='2008/12/19' value6='$90,560' />

                                        <tableBody value1='Quinn Flynn' value2='Support Lead' value3='Edinburgh' value4 ='22' value5='2013/03/03' value6='$342,000' />

                                        <tableBody value1='Charde Marshall' value2='Regional Director' value3='San Francisco' value4 ='33' value5='2008/10/16' value6='$470,600' />

                                        <tableBody value1='Haley Kennedy' value2='Senior Marketing Designer' value3='London' value4 ='43' value5='2012/12/18' value6='$313,500' />

                                        <tableBody value1='Tatyana Fitzpatrick' value2='Regional Director' value3='London' value4 ='19' value5='2010/03/17' value6='$385,750' />

                                        <tableBody value1='Michael Silva' value2='Marketing Designer' value3='London' value4 ='66' value5='2012/11/27' value6='$198,500' />

                                        <tableBody value1='Paul Byrd' value2='Chief Financial Officer (CFO)' value3='New York' value4 ='64' value5='2010/06/09' value6='$725,000' />
                                       
                                        <tableBody value1='Gloria Little' value2='Systems Administrator' value3='New York' value4 ='59' value5='2009/04/10' value6='$237,500' />

                                        <tableBody value1='>Bradley Greer' value2='Software Engineer' value3='London' value4 ='41' value5='2012/10/13' value6='$132,000' />

                                        <tableBody value1='>Dai Rios' value2='Personnel Lead' value3='Edinburgh' value4 ='35' value5='2012/09/26' value6='$217,500' />

                                        <tableBody value1='Jenette Caldwell' value2='Development Lead' value3='New York' value4 ='30' value5='2011/09/03' value6='$345,000' />

                                        <tableBody value1='Yuri Berry' value2='Chief Marketing Officer (CMO)' value3='New York' value4 ='40' value5='2009/06/25' value6='$675,000' />

                                        <tableBody value1='Caesar Vance' value2='Pre-Sales Support' value3='New York' value4 ='21' value5='2011/12/12' value6='$106,450' />

                                        <tableBody value1='Doris Wilder' value2='Sales Assistan' value3='Sidney' value4 ='23' value5='2010/09/20' value6='$85,600' />
                                       
                                        <tableBody value1='Angelica Ramos' value2='Chief Executive Officer (CEO)' value3='Londo' value4 ='47' value5='2009/10/09' value6='$1,200,000' />

                                        <tableBody value1='Gavin Joyce' value2='Developer' value3='Edinburgh' value4 ='42' value5='2010/12/22' value6='$92,575' />

                                        <tableBody value1='Jennifer Chang' value2='Regional Director' value3='Singapore' value4 ='28' value5='2010/11/14' value6='$357,650' />

                                        <tableBody value1='Brenden Wagner' value2='Software Engineer' value3='San Francisco' value4 ='28' value5='2011/06/07' value6='$206,850' />

                                        <tableBody value1='Fiona Green' value2='Chief Operating Officer (COO)' value3='San Francisco' value4 ='48' value5='2010/03/11' value6='$850,000' />
                                     
                                        <tableBody value1='Shou Itou' value2='Regional Marketing' value3='Tokyo' value4 ='20' value5='2011/08/14' value6='$163,000' />

                                       
                                        <tableBody value1='Unity Butler' value2='Marketing Designer' value3='San Francisco' value4 ='48' value5='2009/12/0' value6='$85,675' />

                                        <tableBody value1='Hermione Butler' value2='Regional Directo' value3='San Francisco' value4 ='47' value5='2011/03/21' value6='$356,250' />

                                        <tableBody value1='Donna Snider' value2='Customer Support' value3='SNew York' value4 ='27' value5='2011/01/25' value6='$112,000' />

                                    </tbody>
                                </table>
                            </div>
                        </div>
        )
    
}