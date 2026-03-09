import { Events } from "@/types/events";

export const events: Events = [
  {
    year: 2026,
    periodType: "Q",
    periodNumber: 2,
    isChecked: true,
    events: [
      { title: "Terraform (VPC, EC2, S3) yordamida AWS infratuzilmasini sozlash", isChecked: true, type: "Infrastructure" },
      { title: "Docker ko'p bosqichli qurish optimallashtirish", isChecked: true, type: "Konteynerlar"" },
      { title: "Node.js ilovalari uchun GitHub Actions CI yo'l liniyasi", isChecked: true, type: "CI/CD" },
      { title: "Avtomatlashtirish uchun Bash skriptlari (zaxiralash, joylashtirish)", isChecked: true, type: "Automation" },
      { title: "AWS IAM xavfsizlik bo'yicha eng yaxshi amaliyotlarni joriy etish", isChecked: true, type: "Security" },
      { title: "AWS resurslarini boshqarish uchun Python skriptlari", isChecked: true, type: "Automation" },
      { title: "Mahalliy rivojlanish uchun Docker Compose", isChecked: true, type: "Development" }
    ],
  },
  {
    year: 2026,
    periodType: "Q",
    periodNumber: 3,
    isChecked: false,
    events: [
      { title: "AWS EKS da Kubernetes klasterini sozlash", isChecked: false, type: "Orchestration" },
      { title: "Ilovalarni joylashtirish uchun boshqaruv jadvallari", isChecked: false, type: "Kubernetes" },
      { title: "Jenkins SonarQube bilan deklarativ quvur liniyasi", isChecked: false, type: "CI/CD" },
      { title: "Server konfiguratsiyasi uchun moslashtirilgan o'yin kitoblari", isChecked: false, type: "Configuration" },
      { title: "Prometheus & Grafana for Container Monitoring", isChecked: false, type: "Monitoring" },
      { title: "ELK Stack (Elasticsearch, Logstash, Kibana)", isChecked: false, type: "Logging" },
      { title: "Maxfiy ma'lumotlarni boshqarish uchun HashiCorp ombori", isChecked: false, type: "Security" },
      { title: "Terraform bilan AWS Lambda funktsiyalari", isChecked: false, type: "Serverless" }
    ],
  },
  {
    year: 2026,
    periodType: "Q",
    periodNumber: 4,
    isChecked: false,
    events: [
      { title: "K8s joylashtirish uchun ArgoCD bilan GitOps", isChecked: false, type: "GitOps" },
      { title: "Istio xizmat ko'rsatish tarmog'ini joriy etish", isChecked: false, type: "Networking" },
      { title: "AWS EKS xavfsizlikni mustahkamlash", isChecked: false, type: "Security" },
      { title: "K8s siyosatlari uchun ochiq siyosat agenti (OPA)", isChecked: false, type: "Security" },
      { title: "Azure AKS va GCP GKE ko'p bulutli sozlamalari", isChecked: false, type: "Infrastructure" },
      { title: "Ko'p bulutli tizimlar uchun Terraform modullari", isChecked: false, type: "Infrastructure" },
      { title: "Mikroservislar uchun CI/CD quvur liniyasi", isChecked: false, type: "CI/CD" },
      { title: "Kong API Gateway integratsiyasi", isChecked: false, type: "Networking" }
    ],
  },
  {
    year: 2026,
    periodType: "Q",
    periodNumber: 1,
    isChecked: false,
    events: [
      { title: "Infratuzilma uchun AWS CDK kodi sifatida", isChecked: false, type: "Infrastructure" },
      { title: "Kengaytirilgan monitoring uchun Datadog", isChecked: false, type: "Monitoring" },
      { title: "Kubernetes sinovlari uchun Chaos Mesh", isChecked: false, type: "Testing" },
      { title: "AWS CloudWatch jurnallari haqida ma'lumot", isChecked: false, type: "Logging" },
      { title: "Terraform Enterprise ish maydonini sozlash", isChecked: false, type: "Infrastructure" },
      { title: "Jenkins X bulutga asoslangan CI/CD uchun", isChecked: false, type: "CI/CD" },
      { title: "AWS xarajatlarni o'rganuvchi va byudjetlashtirish", isChecked: false, type: "Operations" },
      { title: "K8s uchun resurslarni ta'minlash uchun krossplane", isChecked: false, type: "Infrastructure" }
    ],
  },
  {
    year: 2026,
    periodType: "Q",
    periodNumber: 2,
    isChecked: false,
    events: [
      { title: "GitOps avtomatlashtirish uchun Flux CD", isChecked: false, type: "GitOps" },
      { title: "Maxsus Kubernetes operatorlari", isChecked: false, type: "Development" },
      { title: "Tekton yo'llarini amalga oshirish", isChecked: false, type: "CI/CD" },
      { title: "AWS App Mesh Xizmat Mesh", isChecked: false, type: "Networking" },
      { title: "Fargate bilan AWS ECS", isChecked: false, type: "Containers" },
      { title: "Pulumi infratuzilma uchun kod sifatida", isChecked: false, type: "Infrastructure" },
      { title: "AWS CloudFormation shablonlari", isChecked: false, type: "Infrastructure" },
      { title: "Terraform import avtomatlashtirish", isChecked: false, type: "Automation" }
    ],
  },
  {
    year: 2026,
    periodType: "Q",
    periodNumber: 3,
    isChecked: false,
    events: [
      { title: "Kubernetes operatorlarini ilg'or ishlab chiqish", isChecked: false, type: "Development" },
      { title: "Xizmat ko'rsatish tarmoqlari federatsiyasi (Istio va App Mesh)", isChecked: false, type: "Networking" },
      { title: "Argo Rollouts bilan GitOps", isChecked: false, type: "GitOps" },
      { title: "AWS tashkilotlari va boshqaruv minorasi", isChecked: false, type: "Infrastructure" },
      { title: "Maxsus Terraform provayderini ishlab chiqish", isChecked: false, type: "Development" },
      { title: "OpenTelemetry bilan ilg'or kuzatuvchanlik", isChecked: false, type: "Monitoring" },
      { title: "Nolinchi ishonch xavfsizligini amalga oshirish", isChecked: false, type: "Security" },
      { title: "Kubeflow bilan MLOps yo'l liniyasi", isChecked: false, type: "MLOps" }
    ],
  }
]; 