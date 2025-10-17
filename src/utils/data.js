// --- IMPORT HÌNH ẢNH TRỰC TIẾP ---
import ProjectImg1 from '../assets/images/projects/Autolink-TT.png'
import ProjectImg2 from '../assets/images/projects/datlatmarketing.png'
import ProjectImg3 from '../assets/images/projects/Chủ-quán-cà-phê.png'
import ProjectImg4 from '../assets/images/projects/EAS-School.png'
import ProjectImg5 from '../assets/images/projects/Home-webgiare.png'
import ProjectImg6 from '../assets/images/projects/Ressta-Profile.png'
import ProjectImg7 from '../assets/images/projects/Thế-Giới-Mẫu-CNC.png'
import ProjectImg8 from '../assets/images/projects/Trang-chủ-Song-Quan-Ads.png'
import ProjectImg9 from '../assets/images/projects/IDo-Jewelry-Trang-sức-cao-cấp.png'
import ProjectImg10 from '../assets/images/projects/Nuage-Sauvage.png'
import ProjectImg11 from '../assets/images/projects/Vật-tư-tiêu-hao-phòng-sạch-Peace-Vina.png'
import ProjectImg12 from '../assets/images/projects/Trang-chủ-Dava-aesthetic.png'
import noImage from '../assets/images/projects/noimg.jpeg'

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
    status: 'Hoạt động'
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
    status: 'Hoạt động'
  },
  {
    title: 'Thế giới mẫu CNCC Web Design',
    image: ProjectImg7, // Sử dụng biến đã import
    description:
      'Xây dựng website bán các mẫu CNC và có nhiều tài khoản có thể đăng bán, tối ưu hóa thiết kế di động và hiệu năng tải trang.',
    tags: ['WordPress', 'Elementor', 'Tối ưu tốc độ'],
    live: 'https://thegioimaucnc.com/',
    status: 'Hoạt động'
  },
  {
    title: 'AUTO GROUP Car Rental Website',
    image: noImage, // Sử dụng biến đã import
    description:
      'Phát triển website thuê xe ô tô, tối ưu giao diện responsive và cải thiện SEO hiển thị.',
    tags: ['WordPress', 'Flatsome'],
    live: 'https://tciautogroupcarrental.com/',
    status: 'Ngưng hoạt động'
  },

  {
    title: 'Website Song Quân Ads',
    image: ProjectImg8, // Sử dụng biến đã import
    description:
      'Trang web về tổ chức sự kiện. tối ưu hóa thiết kế di động và hiệu năng tải trang.',
    tags: ['WordPress', 'Flatsome', 'Tối ưu tốc độ'],
    live: 'https://songquanads.com/',
    status: 'Hoạt động'
  },
  {
    title: 'Bao4road Website',
    image: noImage, // Sử dụng biến đã import
    description:
      'Phát triển website Dịch vụ  về  xe, tối ưu giao diện responsive và cải thiện SEO hiển thị.',
    tags: ['WordPress', 'Elementor', 'Tối ưu tốc độ'],
    live: '',
    status: 'Ngưng hoạt động'
  },
  {
    title: 'Khánh phong Website',
    image: noImage, // Sử dụng biến đã import
    description:
      'Phát triển website Dịch vụ  về  xe, tối ưu giao diện responsive và cải thiện SEO hiển thị.',
    tags: ['WordPress', 'Elementor', 'SEO'],
    live: '',
    status: 'Ngưng hoạt động'
  },
  {
    title: 'Đà lạt marketing Website',
    image: noImage, // Sử dụng biến đã import
    description:
      'Phát triển website Giới thiệu công ty và marketing, tối ưu giao diện responsive và cải thiện SEO hiển thị.',
    tags: ['WordPress', 'Elementor', 'SEO'],
    live: '',
    status: 'Ngưng hoạt động'
  },
  {
    title: 'Vật tư tiêu hao phòng sạchh Website',
    image: ProjectImg11, // Sử dụng biến đã import
    description:
      'Phát triển website Giới thiệu công ty và marketing, tối ưu giao diện responsive và cải thiện SEO hiển thị.',
    tags: ['WordPress', 'Flatsome', 'SEO'],
    live: 'https://vattutieuhaophongsach.com.vn/',
    status: 'Hoạt động'
  },
  {
    title: 'Nuagesauvage Website',
    image: ProjectImg10, // Sử dụng biến đã import
    description:
      'Xây dựng website bán sản phẩm trà tại Pháp, tối ưu hóa thiết kế di động và hiệu năng tải trang.',
    tags: ['WordPress', 'Elementor', 'SEO'],
    live: 'https://nuagesauvage.fr/',
    status: 'Hoạt động'
  },
  {
    title: 'idojewelry Website',
    image: ProjectImg9, // Sử dụng biến đã import
    description:
      'Phát triển website Giới thiệu công ty và marketing, tối ưu giao diện responsive và cải thiện SEO hiển thị.',
    tags: ['WordPress', 'Flatsome', 'SEO'],
    live: 'https://idojewelry.com/',
    status: 'Hoạt động'
  },
  {
    title: 'Dava Innovation Website',
    image: ProjectImg12, // Sử dụng biến đã import
    description:
      'Xây dựng website bán sản phẩm trà tại Pháp, tối ưu hóa thiết kế di động và hiệu năng tải trang.',
    tags: ['WordPress', 'Elementor', 'SEO'],
    live: 'https://dava.com.vn/',
    status: 'Hoạt động'
  },
]
