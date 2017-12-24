import { Component, OnInit } from '@angular/core';
import { Member } from './member/member.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  members: Member[] = [
    new Member('../assets/icons/Team01.png','Chuang Pei-Han', 'Bachelor of Information system(University of Melbourne, Australia) Finance Technology: Future Commerce (Massachusetts Institute of Technology).','Serial entrepreneur with experience in raising multi-million investment. His Blockchain Platform as as service (BPaaS) was selected and incubated in SGInnovate as first batch incubatees.'),
    new Member('../assets/icons/Team02.png','Branson Lee','Bachelor of Computer Engineering (Nanyang Technology University, Singapore) Finance Technology: Future Commerce (Massachusetts Institute of Technology).','Currently an Ex-Co member of the SIngapore Fintech Association and heads the Talent Committee. Experienced in business development and channel partnership, an active public speaker for Blockchain and Fintech events.'),
    new Member('../assets/icons/Team03.png','Dorel D. Burcea','Bachelor in Applied Mathematics (Tianjin University), Executive MBA (Rutgers Business School)','Over 16 years of experience in Application Development and Infrastructure Management. A technology leader with seasoned experience overseeing multi-million digital transformation projects. He is Group CIO at UniCredit Bank and Internet of Things Advisor @Lucas Bernoulli.'),
    new Member('../assets/icons/Team04.png','Bruce Lu Yang','Bachelor in Applied Mathematics (Tianjin University), Executive MBA (Rutgers Business School), Finance Technology: Future Commerce (Massachusetts Institute of Technology)','Over 20 years of experience in software development and innovation. Bruce worked with IBM, as a technical leader, focusing on cloud application development and technology innovation. First few to successfully implemented a business application using HyperLedger Fabric for his client.'),
    new Member('../assets/icons/Team05.png','Eddy Low','Bachelor of Multimedia Design (The One Academy of Malaysia)','Over 10 years of Specialised in strategy and design. He creates better user interface and user experience in design for mobile and desktop apps for the clients such as UOB, OCBC, DBS, Standard Chartered Bank.'),
  ]

  advisors: Member[] = [
    new Member('../assets/icons/Team06.png','Lok Choon Hong','Master of Law (University of Cambridge); MBA (INSEAD); EMBA (Tsinghua University), Founding president of Association of Intellectual Property Entrepreneurs and Organisations (AIPO) &  treasurer of Malaysian Business Angel Network (MBAN).','He is the founder director of Global IP Southeast Asia Pte Ltd, an intellectual property rights consultancy firm with offices across Asia. Mr Lok is also actively involved in venture / angel capital investment in IP based companies.'),
    new Member('../assets/icons/Team07.png','Dr. Allen Yeo','Bachelor & PHD of Mechanical Engineer (Glasgow University); MBA Scholar (University at Buffalo); Research scholar sponsored by Committee of Vice Chancellors and Principals; Associate professor (Hon. & Adjunct of National University of Singapore)','A frequent conference speaker on technology innovation & application and IP commercialisation. A seasoned entrepreneur founded several successful companies including a multi-million financial technology company which was acquired. He has held IP related key positions at Government bodies in Singapore.'),
    new Member('../assets/icons/Team08.png','Dr. Rex Yeap ','Master of Science (Distinction - University of Leeds); DBA (University of South Australia); Partner, Invention Capital; Vice-Chairman, BANSEA','A Partner of Invention Capital LLP, Vice Chairman of BANSEA and also the co-founder of BANSEA Fund One, where he served as the Chair in its Investment Committee Board for this fund. He is the co-inventor of the IP Blockchain, has over 20 Information Technology related patents and thousands of inventions.'),
    new Member('../assets/icons/Team09.png','Dr. Yeo Yong-Kee','Bachelor of Electrical and Electronic Engineering (National University of Singapore); PHD in Electrical and Comp Engineering (Georgia Institute of Technology); National Science Scholarship (A*STAR), author of 8 patents and published more than 50 research papers in the telecommunication field.','Was a research program manager in the Institute for InfoComm Research (which is part of A*STAR) where he managed more than $10million in research grants. He was appointed by the Singapore government to lead a working group to develop standards for Singapore’s nationwide fiber network.'),
    new Member('../assets/icons/Team10.png','George Han','Bachelor of Economics & Political Science (National University of Singapore) MBA - Investment (Hull Business School)','With extensive experience in helping startups raise follow-on and Series A investment. George has spent 6 years at a university incubator during which he helped create 80 startups and advised over 500 founders in their business development plans. He has an extensive network of investors that include Private Equity and Family Offices.'),
  ]

  constructor() { }

  ngOnInit() {
  }

}
