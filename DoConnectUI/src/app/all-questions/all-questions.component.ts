import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { Question } from '../question';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-questions',
  templateUrl: './all-questions.component.html',
  styleUrls: ['./all-questions.component.css']
})
export class AllQuestionsComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.userService.giveUserData()
    this.getQuestions('all')
  }
  response:any
  questions: Question[] | undefined

  user = new User()

  getQuestions(topic: string) {
    this.userService.getQuestions(topic).subscribe((data) => {
      this.questions = data
      console.log("questions are " + this.questions)

    })
  }

  sendQuestionToGetAnswer(questionId: number) {
    this.userService.getQuestionId(questionId)
    this.router.navigate(['/get-answer'])
  }

  deleteQuestion(questionId:number)
  {
    this.userService.deleteQuestion(questionId).subscribe((data)=>
    {
      this.response=data
      alert("Question Removed")
      this.router.navigate(['/user'])
    })
  }
}
