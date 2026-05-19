# Professional Portfolio & Resume Website

A modern, responsive, and professional portfolio website built with **Next.js (App Router)**, **Tailwind CSS**, **Framer Motion**, and **shadcn/ui**.

## 🚀 Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **QR Code**: [react-qr-code](https://github.com/rossinek/react-qr-code)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes) (Dark/Light Mode)

## ✨ Features

- **Cosmic 3D WebGL Constellation Canvas**: A highly optimized standard Three.js particle system backdrop that rotates with physics-based mouse-tilt parallax and trigonometrically floats over time (dynamically adapting colors/blending between Light and Dark modes).
- **Projects-First Layout Flow**: Restructured sections sequence to place the Projects showcase directly under the About introduction, highlighting core product capabilities micro-seconds after load, followed by detailed Experience and Education history.
- **Premium Interaction Systems**: Fluid magnetic navigation links, morphing active tab highlights, and physics-driven spring cards.
- **Mobile Swipable project Carousels**: Viewport-adaptive rendering that converts the vertical projects list on mobile screens into a swipable horizontal deck with Framer Motion liquid pager dots.
- **Sticky Mobile HUD**: Scroll-linked read progress indicator bar paired with a sweeping diagonal metallic shine header logo ("Fah Jin").
- **Education & Graduate Candidature**: Accurate ongoing MSc in FinTech at Nanyang Technological University (NTU), BSc in Business, and specialized credentials (SMU Advanced Python & ML, Heicoders GenAI, General Assembly Software Engineering).
- **Optimized Mobile Viewport**: Hides redundant Sidebar containers completely on mobile devices to preserve pristine spacing and page depth, relying on the compact sticky mobile header.
- **Persistent CV & Social Integration**: Seamless download links for `/Yong_Fah_Jin_CV.pdf` and elegant icon bindings.
- **Dark Mode**: Fully supported with next-themes integration and high-precision WebGL theme shifting.

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/chocomeowy/resume.git
   cd resume
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 📄 Updating Your Resume

1. Place your `resume.pdf` file in the `public/` folder.
2. The website (hosted at [fahjin.vercel.app](https://fahjin.vercel.app)) will automatically update the download link and QR code.

### 📱 Quick Access QR Code

Scan the code below to visit **Yong Fah Jin's** live portfolio:

![Portfolio QR Code](https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://fahjin.vercel.app)

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

Built with ❤️ for a professional showcase.
