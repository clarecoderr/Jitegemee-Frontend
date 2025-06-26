import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStudentLifeStore = defineStore('student_life',  {
    state: () => {
        const student_life = ref([
            {
                id: 1,
                title: "Beyond the books:A journey through student life.",
                image: "../../public/student life/conor-samuel-JbqJBymK3Vo-unsplash.jpg",
                description: "Explore the vibrant, unpredictable, and inspiring world of student life — from late-night study sessions and campus friendships to personal growth, hustle culture, and the everyday wins that shape your journey beyond academics.",
            },
            {
                id: 2,
                title: "Balancing Books & Life: Real Talk from Campus",
                image: "../../public/student life/tony-tran-F8sCVSW4t4E-unsplash.jpg",
                description: "Discover how students manage classes, relationships, and personal time — the honest truth behind the academic grind.",
            },
            {
                id: 3,
                title: "Affordable Eats Near Campus",
                image: "../../public/student life/umar-ben-o21HcuwQ03w-unsplash.jpg",
                description: "A roundup of budget-friendly food spots every student should know — because great grades need fuel!",
            },
            {
                id: 4,
                title: "Surviving Group Work Without Losing Your Mind",
                image: "../../public/student life/shane-rounce-DNkoNXQti3c-unsplash.jpg",
                description: "How to handle teamwork, manage conflicts, and actually enjoy collaborating with classmates",
            },
            {
                id: 5,
                title: "Mental Health Matters: Resources & Stories",
                image: "../../public/student life/matthew-ball-3wW2fBjptQo-unsplash.jpg",
                description: "Real experiences and support tools for staying emotionally healthy throughout your student journey.",
            },
            {
                id: 6,
                title: "Student Events You Can’t Miss This Semester",
                image: "../../public/student life/aniq-danial-ZIiUBCcfYJE-unsplash.jpg",
                description: "Mark your calendar! The most exciting events, meetups, and opportunities happening on campus.",
            },
            {
                id: 7,
                title: "Opportunities: Internships, Scholarships & More",
                image: "",
                description: "Stay ahead with curated listings of internships, scholarships, tech competitions, and career-building opportunities tailored for students. Your next big step could be one click away!"


            },
            {
                id: 8,
                title: "Time Management Tips for Busy Students",
                image: "../../public/student life/jason-leung-o-Mwwj9tc4Q-unsplash.jpg",
                description: "Struggling to keep up? Learn how to plan your day, stay productive, and still make time for yourself.",
            },
            {
                id: 9,
                title: "Mentorship: Guiding the Next Generation",
                image: "../../public/student life/miguel-dominguez-nRojy1UZgdU-unsplash.jpg",
                description: "Connect with experienced mentors who are ready to walk with you on your journey — offering guidance, support, and real-world advice in academics, career, tech, and life. Whether you're just starting out or leveling up, mentorship makes the difference.",
            },
            {
                id: 10,
                title: "Library: Your Digital Shelf of Knowledge",
                image: "../../public/student life/samantha-hentosh-akocAO9QCHM-unsplash.jpg",
                description: "Access a growing collection of notes, past papers, study guides, e-books, and academic resources — all in one place. Whether you’re preparing for exams or exploring new topics, the library is your go-to zone for smart learning.",
            }
        
        ])

        return{
            student_life,
        }
    }, 
    actions:{
        
    }
})
