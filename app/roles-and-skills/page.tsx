import type { Metadata } from 'next'
import RolesAndSkills from '@/components/roles-and-skills'

export const metadata: Metadata = {
  title: 'Roles & Skills — Abhay Panchal',
  description: 'Explore the software development, data analytics, and AI/ML roles Abhay Panchal is open to, with relevant skills for each.',
}

export default function RolesAndSkillsPage() {
  return <RolesAndSkills />
}
