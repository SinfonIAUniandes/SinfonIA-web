import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {
  papers = [
    {
      title: 'ICARA LLM Autonomous Task Execution',
      path: 'assets/pdf/ICARA-llm-autonomous-task-execution.pdf'
    },
    {
      title: 'Winners Paper',
      path: 'assets/pdf/winners-paper.pdf'
    },
    {
      title: 'Integrating Convolutional Neural Networks and Reinforcement Learning for Autonomous Person-Following in Social Robotics',
      path: 'assets/pdf/Integrating convolutional neural networks and reinforcement learning for autonomous person-following in social robotics.pdf'
    },
    {
      title: 'Team Description Paper 2024',
      path: 'assets/pdf/SinfonIA_TDP_Eindhoven_2024.pdf'
    },
    {
      title: 'Multimodal Reinforcement Learning',
      path: 'assets/pdf/multimodal-reinforcement-learning.pdf'
    },
    {
      title: 'GPSR Autonomy through LLMs',
      path: 'assets/pdf/GSPR.pdf'
    },
    {
      title: 'Emotion Detection',
      path: 'assets/pdf/emotion-detection.pdf'
    },
    {
      title: 'Mapping University Space',
      path: 'assets/pdf/mapping-university-space.pdf'
    },
    {
      title: '4 Line',
      path: 'assets/pdf/4-line.pdf'
    },
    {
      title: 'Navigation Reinforcement Learning',
      path: 'assets/pdf/navigation-reinforcement-learning.pdf'
    }
  ];

  ngOnInit() {}
}
