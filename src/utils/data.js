// --- IMPORT HÌNH ẢNH TRỰC TIẾP ---
import ProjectImg1 from '../assets/images/projects/Autolink-TT.png'
import ProjectImg2 from '../assets/images/projects/pdatlatmarketing.png'
import ProjectImg3 from '../assets/images/projects/Chủ-quán-cà-phê.png'
import ProjectImg4 from '../assets/images/projects/EAS-School.png'
import ProjectImg5 from '../assets/images/projects/Home-webgiare.png'
import ProjectImg6 from '../assets/images/projects/ressta.png'

export const SKILLS = [
  {
    title: 'Frontend Development',
    skills: [
      'React.js',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3 (Sass/SCSS)',
      'Tailwind CSS'
    ]
  },
  {
    title: 'Backend Development',
    skills: ['Node.js & Express.js', 'PHP', 'Laravel Framework', 'RESTful APIs']
  },
  {
    title: 'WordPress Expertise',
    skills: [
      'Theme Development & Customization',
      'Plugin Development',
      'Elementor & Page Builders',
      'Performance Optimization'
    ]
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'MongoDB', 'Firebase']
  },
  {
    title: 'Tools & Platforms',
    skills: [
      'Git & GitHub',
      'Visual Studio Code',
      'Postman (API Testing)',
      'XAMPP / Local WP'
    ]
  },
  {
    title: 'Soft Skills',
    skills: [
      'Problem Solving',
      'Team Collaboration',
      'Project Management',
      'Adaptability'
    ]
  }
]

export const PROJECTS = [
  {
    title: 'Auto Link Việt Nam',
    image: ProjectImg1, // Sử dụng biến đã import
    description:
      'Website cung cấp dịch vụ về xe, được xây dựng hoàn toàn trên nền tảng WordPress, sử dụng Elementor để tùy biến giao diện.',
    tags: ['WordPress', 'Elementor', 'SEO'],
    live: 'https://autolinkvietnam.com.vn/',
    status: 'Hoạt động'
  },
  {
    title: 'Web giới thiệu dịch vụ Marketing',
    image: ProjectImg2, // Sử dụng biến đã import
    description:
      'Thiết kế giao diện trên Figma và xây dựng trang web giới thiệu dịch vụ marketing bằng WordPress. Web hiện không còn hoạt động.',
    tags: ['WordPress', 'Figma', 'Elementor'],
    live: 'https://www.figma.com/design/8xQEOaQ5ZpBpi23LLdbPaD/Untitled?node-id=0-1&p=f&t=phfGgWHECwyJPl22-0',
    status: 'Xem trên Figma'
  },
  {
    title: 'Decor Quán Cafe',
    image: ProjectImg3, // Sử dụng biến đã import
    description:
      'Trang web dịch vụ thiết kế và thi công quán cafe, xây dựng bằng WordPress. Tối ưu hóa cho việc hiển thị hình ảnh và thu hút khách hàng.',
    tags: ['WordPress', 'Elementor', 'UI/UX'],
    live: 'https://chuquancaphe.vn/',
    status: 'Bảo trì'
  },
  {
    title: 'Website Trường học',
    image: ProjectImg4, // Sử dụng biến đã import
    description:
      'Website giới thiệu thông tin cho một cơ sở giáo dục, tập trung vào trải nghiệm người dùng cho phụ huynh và học sinh. Xây dựng bằng WordPress.',
    tags: ['WordPress', 'Elementor'],
    live: 'https://eas.edu.vn/',
    status: 'Hoạt động'
  },
  {
    title: 'Website Thiết kế web giá rẻ',
    image: ProjectImg5, // Sử dụng biến đã import
    description:
      'Trang web dịch vụ chuyên về thiết kế website, giới thiệu các gói dịch vụ và dự án đã thực hiện. Xây dựng bằng WordPress.',
    tags: ['WordPress', 'Elementor', 'Tối ưu tốc độ'],
    live: 'https://www.thietkewebgiare.com.vn/',
    status: 'Hoạt động'
  },
  {
    title: 'Website Game',
    image: ProjectImg6, // Sử dụng biến đã import
    description:
      'Trang web giới thiệu và cung cấp thông tin về game. Giao diện được tùy chỉnh để phù hợp với đối tượng game thủ.',
    tags: ['WordPress', 'Custom Theme'],
    live: 'https://ressta.com/',
    status: 'Bảo trì'
  }
]
