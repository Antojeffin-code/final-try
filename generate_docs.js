const PptxGenJS = require('pptxgenjs');
const docx = require('docx');
const fs = require('fs');
const path = require('path');

async function createPPT() {
    let pres = new PptxGenJS();

    pres.layout = 'LAYOUT_16x9';
    pres.defineSlideMaster({
        title: 'MASTER_SLIDE',
        background: { color: 'FFFFFF' },
        objects: [
            { text: { text: 'VisionLux Opticians - App Development Project', options: { x: 0.5, y: 0.2, w: 9, fontSize: 10, color: '888888' } } },
            { text: { text: 'MBA Project Report', options: { x: 0.5, y: 6.9, w: 9, fontSize: 10, color: '888888', align: 'right' } } }
        ]
    });

    // 1. Title Slide
    let slide1 = pres.addSlide({ masterName: 'MASTER_SLIDE' });
    slide1.addText('User Interface Design for APP - Development', { x: 1, y: 2, w: 8, fontSize: 36, bold: true, color: '003366', align: 'center' });
    slide1.addText('VisionLux Opticians / CareerOS App', { x: 1, y: 3.5, w: 8, fontSize: 24, color: '333333', align: 'center' });
    slide1.addText('Prepared by: MBA Student', { x: 1, y: 4.5, w: 8, fontSize: 18, color: '666666', align: 'center' });

    // 2. Introduction and Background
    let slide2 = pres.addSlide({ masterName: 'MASTER_SLIDE' });
    slide2.addText('Introduction and Background', { x: 0.5, y: 0.5, w: 9, fontSize: 28, bold: true, color: '003366' });
    slide2.addText([
        { text: 'Introduction\n', options: { bold: true } },
        { text: 'VisionLux Opticians is a modern, responsive web application designed to provide premium eyewear and professional eye care services. The app bridges the gap between digital convenience and physical optical stores.\n\n' },
        { text: 'Background\n', options: { bold: true } },
        { text: 'Since 2009, VisionLux has been helping people see clearly. To adapt to modern consumer behavior, this app was conceived to allow users to browse 200+ frame styles, book eye exams online, and manage their prescriptions seamlessly.' }
    ], { x: 0.5, y: 1.5, w: 9, h: 5, fontSize: 16, bullet: true });

    // 3. Key to Success
    let slide3 = pres.addSlide({ masterName: 'MASTER_SLIDE' });
    slide3.addText('Key to Success', { x: 0.5, y: 0.5, w: 9, fontSize: 28, bold: true, color: '003366' });
    slide3.addText([
        { text: 'Seamless User Experience (UX): A clean, modern interface accessible across all devices.' },
        { text: 'Comprehensive Features: Integration of product browsing, service booking, and customer accounts.' },
        { text: 'Progressive Web App (PWA): Installable on mobile devices for app-like performance and offline capabilities.' },
        { text: 'Premium Branding: High-quality visuals ("See the world in perfect clarity") that build trust.' },
        { text: 'Customer Convenience: Easy appointment scheduling for eye exams and repair services.' }
    ], { x: 0.5, y: 1.5, w: 9, h: 5, fontSize: 18, bullet: true, color: '333333' });

    // 4. Company Location and Facilities
    let slide4 = pres.addSlide({ masterName: 'MASTER_SLIDE' });
    slide4.addText('Company Location and Facilities', { x: 0.5, y: 0.5, w: 9, fontSize: 28, bold: true, color: '003366' });
    slide4.addText([
        { text: 'Headquarters: Mumbai, Maharashtra, India\n', options: { bold: true } },
        { text: 'Main Branch: Shop No. 12, Crystal Plaza, New Link Road, Andheri West\n' },
        { text: 'Secondary Branch: 204, Linking Road, Bandra West\n\n' },
        { text: 'Facilities:\n', options: { bold: true } },
        { text: '• State-of-the-art eye examination rooms with computerized refraction' },
        { text: '• Frame fitting lounges and contact lens trial stations' },
        { text: '• In-house lens replacement and repair workshops' },
        { text: '• Dedicated digital booking system through the app' }
    ], { x: 0.5, y: 1.5, w: 9, h: 5, fontSize: 16 });

    // 5. Market Segmentation & Target Audience
    let slide5 = pres.addSlide({ masterName: 'MASTER_SLIDE' });
    slide5.addText('Market Segmentation & Target Audience', { x: 0.5, y: 0.5, w: 9, fontSize: 28, bold: true, color: '003366' });
    slide5.addText([
        { text: 'Geographic Segmentation: Urban and semi-urban residents, currently targeting Mumbai metropolitan area.' },
        { text: 'Demographic Segmentation: Adults aged 18-60 (Men & Women) needing vision correction, sunglasses, or regular eye check-ups.' },
        { text: 'Psychographic Segmentation: Professionals, students, and fashion-conscious individuals who value premium quality and convenience.' },
        { text: 'Target Market Strategy: Focus on digital engagement through the app with "Buy 1 Get 1" and "Free Eye Exam" promotions to drive foot traffic.' }
    ], { x: 0.5, y: 1.5, w: 9, h: 5, fontSize: 16, bullet: true });

    // 6. Organization Structure & Management Team
    let slide6 = pres.addSlide({ masterName: 'MASTER_SLIDE' });
    slide6.addText('Organization Structure & Management', { x: 0.5, y: 0.5, w: 9, fontSize: 28, bold: true, color: '003366' });
    slide6.addText([
        { text: 'Organization Structure', options: { bold: true } },
        { text: '• CEO / Managing Director' },
        { text: '• Operations Manager (Oversees branches and inventory)' },
        { text: '• Chief Optometrist (Leads clinical services)' },
        { text: '• Sales & Marketing Team (App promotions, customer relations)' },
        { text: '• IT/App Development Team (Maintains the VisionLux App)\n\n' },
        { text: 'Management Team', options: { bold: true } },
        { text: 'A dedicated team combining optical health expertise (certified optometrists) with modern tech and digital marketing proficiencies to run the app and stores.' }
    ], { x: 0.5, y: 1.5, w: 9, h: 5, fontSize: 16 });

    // 7. Requirements Analysis
    let slide7 = pres.addSlide({ masterName: 'MASTER_SLIDE' });
    slide7.addText('Requirements Analysis', { x: 0.5, y: 0.5, w: 9, fontSize: 28, bold: true, color: '003366' });
    slide7.addText([
        { text: 'Hardware:', options: { bold: true } },
        { text: '• Client Side: Any smartphone, tablet, or PC with a modern web browser.' },
        { text: '• Server Side: Cloud hosting servers (e.g., AWS/Vercel) for app deployment.\n' },
        { text: 'Software:', options: { bold: true } },
        { text: '• Front-End: HTML5, CSS3, Vanilla JavaScript, Service Workers for PWA.' },
        { text: '• DB/Storage: LocalStorage (prototype), scalable backend database (production).\n' },
        { text: 'Network:', options: { bold: true } },
        { text: '• Standard broadband/4G/5G connection. PWA allows offline basic browsing.\n' },
        { text: 'Platform:', options: { bold: true } },
        { text: '• Web-based (cross-platform), installable as a Progressive Web App (PWA) on iOS/Android.' }
    ], { x: 0.5, y: 1.5, w: 9, h: 5, fontSize: 14 });

    // 8. APP Specifications & Features
    let slide8 = pres.addSlide({ masterName: 'MASTER_SLIDE' });
    slide8.addText('APP - Specifications', { x: 0.5, y: 0.5, w: 9, fontSize: 28, bold: true, color: '003366' });
    slide8.addText([
        { text: 'Core Specifications:' },
        { text: '• Responsive Grid UI with mobile-first approach.' },
        { text: '• Smooth animations and transitions for premium feel.' },
        { text: '• Shopping Cart & Wishlist integration.' },
        { text: '• Appointment Booking System for Services.' },
        { text: '• User Authentication (Login/Register module).' }
    ], { x: 0.5, y: 1.5, w: 4.25, h: 5, fontSize: 16, bullet: true });

    // Attempt to add Home App image if available
    try {
        if (fs.existsSync('./assets/hero_banner.png')) {
            slide8.addImage({ path: './assets/hero_banner.png', x: 5, y: 1.5, w: 4.5, h: 3 });
        }
    } catch (e) { }

    // 9. UI Design: Login
    let slide9 = pres.addSlide({ masterName: 'MASTER_SLIDE' });
    slide9.addText('User Interface: Login & Registration', { x: 0.5, y: 0.5, w: 9, fontSize: 28, bold: true, color: '003366' });
    slide9.addText([
        { text: 'Login Module Features:' },
        { text: '• Secure email and password entry.' },
        { text: '• Toggle between "Sign In" and "Create Account".' },
        { text: '• Password recovery / "Forgot Password" link.' },
        { text: '• Clean modal overlay design to avoid page reloads.' }
    ], { x: 0.5, y: 1.5, w: 9, h: 2, fontSize: 16, bullet: true });

    // 10. UI Design: About Product
    let slide10 = pres.addSlide({ masterName: 'MASTER_SLIDE' });
    slide10.addText('User Interface: About the Product/Store', { x: 0.5, y: 0.5, w: 9, fontSize: 28, bold: true, color: '003366' });
    slide10.addText([
        { text: 'About VisionLux Features:' },
        { text: '• Details the 15+ years of excellence.' },
        { text: '• Highlights core product benefits: UV Protection, Anti-Glare, Blue Light Filter.' },
        { text: '• Visual showcase of the premium store interior.' }
    ], { x: 0.5, y: 1.5, w: 9, h: 2, fontSize: 16, bullet: true });
    try {
        if (fs.existsSync('./assets/about_store.png')) {
            slide10.addImage({ path: './assets/about_store.png', x: 2.5, y: 3.5, w: 5, h: 3 });
        }
    } catch (e) { }

    // 11. UI Design: Services Offering
    let slide11 = pres.addSlide({ masterName: 'MASTER_SLIDE' });
    slide11.addText('User Interface: Services Offering', { x: 0.5, y: 0.5, w: 9, fontSize: 28, bold: true, color: '003366' });
    slide11.addText([
        { text: 'Eye Care Services Displayed:' },
        { text: '• Eye Examination (30-45 mins)' },
        { text: '• Prescription Lens Fitting' },
        { text: '• Vision Testing (Computerized)' },
        { text: '• Contact Lens Consultation and Lens Repairs' },
        { text: '• Each service card includes pricing and clear "Book Now" Calls-to-Action.' }
    ], { x: 0.5, y: 1.5, w: 9, h: 5, fontSize: 16, bullet: true });

    // 12. UI Design: Navigation Features
    let slide12 = pres.addSlide({ masterName: 'MASTER_SLIDE' });
    slide12.addText('User Interface: Navigation Features', { x: 0.5, y: 0.5, w: 9, fontSize: 28, bold: true, color: '003366' });
    slide12.addText([
        { text: 'App Navigation:' },
        { text: '• Sticky top header for desktop with dropdown menus.' },
        { text: '• Collapsible Hamburger mobile menu for smaller screens.' },
        { text: '• Bottom Navigation Bar (PWA specific) for easy thumb reach on mobiles.' },
        { text: '• Quick access icons to Search, Wishlist, Cart, and User Profile.' }
    ], { x: 0.5, y: 1.5, w: 9, h: 5, fontSize: 16, bullet: true });

    // 13. UI Design: Features & Products
    let slide13 = pres.addSlide({ masterName: 'MASTER_SLIDE' });
    slide13.addText('User Interface: Products & App Features', { x: 0.5, y: 0.5, w: 9, fontSize: 28, bold: true, color: '003366' });
    slide13.addText([
        { text: 'Shopping Features:' },
        { text: '• Dynamic product grids with category filtering (Men, Women, Sunglasses, Lenses).' },
        { text: '• Promotions section for discounts (e.g., Buy 1 Get 1, 30% Off).' },
        { text: '• Testimonials carousel for social proof and trust building.' }
    ], { x: 0.5, y: 1.5, w: 9, h: 2, fontSize: 16, bullet: true });
    try {
        if (fs.existsSync('./assets/mens_glasses.png')) {
            slide13.addImage({ path: './assets/mens_glasses.png', x: 1, y: 4, w: 3, h: 2.2 });
        }
        if (fs.existsSync('./assets/sunglasses.png')) {
            slide13.addImage({ path: './assets/sunglasses.png', x: 6, y: 4, w: 3, h: 2.2 });
        }
    } catch (e) { }

    // 14. UI Design: Contact Details
    let slide14 = pres.addSlide({ masterName: 'MASTER_SLIDE' });
    slide14.addText('User Interface: Contact Details', { x: 0.5, y: 0.5, w: 9, fontSize: 28, bold: true, color: '003366' });
    slide14.addText([
        { text: 'Contact & Store Location Info:' },
        { text: '• Interactive Contact Form for email inquiries.' },
        { text: '• Clickable phone numbers and WhatsApp integration.' },
        { text: '• Embedded Google Maps showing store locations.' },
        { text: '• Detailed clinic opening hours and branch addresses.' }
    ], { x: 0.5, y: 1.5, w: 9, h: 5, fontSize: 16, bullet: true });

    // 15. Conclusion
    let slide15 = pres.addSlide({ masterName: 'MASTER_SLIDE' });
    slide15.addText('Conclusion', { x: 0.5, y: 0.5, w: 9, fontSize: 28, bold: true, color: '003366' });
    slide15.addText([
        { text: 'The VisionLux App UI successfully combines elegant, premium aesthetics with practical e-commerce and booking functionalities. As a digital solution, it fulfills the modern user\'s requirements for an optical shop, meeting both business objectives and customer needs.' }
    ], { x: 0.5, y: 1.5, w: 9, h: 5, fontSize: 18 });

    await pres.writeFile({ fileName: 'VisionLux_App_Design_Presentation.pptx' });
    console.log('PPT Created successfully');
}

async function createDoc() {
    // Generate DOCX text content roughly matching PPT
    const { Document, Paragraph, TextRun, Packer, HeadingLevel } = docx;

    const doc = new Document({
        sections: [{
            properties: {},
            children: [
                new Paragraph({
                    text: 'User Interface Design for APP - Development',
                    heading: HeadingLevel.TITLE
                }),
                new Paragraph({
                    text: 'Project: VisionLux Opticians',
                    heading: HeadingLevel.HEADING_1
                }),
                new Paragraph({ text: '' }),

                new Paragraph({ text: '1. Introduction and Background', heading: HeadingLevel.HEADING_2 }),
                new Paragraph({
                    text: 'VisionLux Opticians is a responsive, modern web application designed for an optical shop to bridge the gap between digital ease and physical eye care. Since 2009, VisionLux has been dedicated to improving vision, and this app serves as a digital platform where users can browse eyewear, access services, and schedule exams online.'
                }),
                new Paragraph({ text: '' }),

                new Paragraph({ text: '2. Key to Success', heading: HeadingLevel.HEADING_2 }),
                new Paragraph({ text: '• Seamless User Experience (UX): A clean, modern interface accessible across all devices.' }),
                new Paragraph({ text: '• Comprehensive Features: Integration of product browsing, service booking, and customer accounts.' }),
                new Paragraph({ text: '• Progressive Web App (PWA): Installable on mobile devices with offline capabilities.' }),
                new Paragraph({ text: '• Customer Convenience: Easy online appointment scheduling.' }),
                new Paragraph({ text: '' }),

                new Paragraph({ text: '3. Company Location and Facilities', heading: HeadingLevel.HEADING_2 }),
                new Paragraph({ text: 'Headquarters: Mumbai, Maharashtra, India.' }),
                new Paragraph({ text: 'Main Branch: Shop No. 12, Crystal Plaza, New Link Road, Andheri West.' }),
                new Paragraph({ text: 'Facilities include state-of-the-art eye examination rooms, frame fitting lounges, and lens replacement workshops, all accessible via the app.' }),
                new Paragraph({ text: '' }),

                new Paragraph({ text: '4. Market Segmentation / Target Market / Target Audience', heading: HeadingLevel.HEADING_2 }),
                new Paragraph({ text: 'The target audience includes adults aged 18-60 in urban and semi-urban areas who require vision correction or fashionable sunglasses. The strategy focuses on tech-savvy individuals who prefer the convenience of browsing styles and booking appointments online.' }),
                new Paragraph({ text: '' }),

                new Paragraph({ text: '5. Organization Structure & Management Team', heading: HeadingLevel.HEADING_2 }),
                new Paragraph({ text: 'The organization is led by a CEO, supported by an Operations Manager, Chief Optometrist, and a dedicated App Development and IT support team. The team synergizes clinical optical expertise with modern digital solutions.' }),
                new Paragraph({ text: '' }),

                new Paragraph({ text: '6. Requirements Analysis', heading: HeadingLevel.HEADING_2 }),
                new Paragraph({ text: '• Hardware: Any smartphone or PC for the client; cloud servers for backend hosting.' }),
                new Paragraph({ text: '• Software: HTML5, CSS3, JavaScript, Web App Manifests.' }),
                new Paragraph({ text: '• Network: Standard internet connection with PWA local caching.' }),
                new Paragraph({ text: '• Platform: Cross-platform web browsers (Chrome, Safari, Edge).' }),
                new Paragraph({ text: '' }),

                new Paragraph({ text: '7. APP Specifications', heading: HeadingLevel.HEADING_2 }),
                new Paragraph({ text: 'The application features a responsive layout, interactive product grids, appointment booking forms, a shopping cart sidebar, authentication modals, and a PWA install banner.' }),
                new Paragraph({ text: '' }),

                new Paragraph({ text: '8. User Interface Design', heading: HeadingLevel.HEADING_2 }),
                new Paragraph({ text: 'Login Module: Provides a secure overlay modal for user login and registration, preventing page reloads.', bullet: { level: 0 } }),
                new Paragraph({ text: 'About Product: Rich visual sections outlining UV protection, anti-glare, and blue light product features.', bullet: { level: 0 } }),
                new Paragraph({ text: 'Services Offering: A grid displaying services like Eye Exams, Lens Fitting, and Contact Lens Consultations with clear Book Now buttons.', bullet: { level: 0 } }),
                new Paragraph({ text: 'Navigation Features: Sticky headers for desktop, hamburger menus, and bottom navbars for mobile ensure content is highly accessible.', bullet: { level: 0 } }),
                new Paragraph({ text: 'Features: Category tabs for Men\'s, Women\'s, and Sunglasses. Cart integration, Wishlists, and promotional banners.', bullet: { level: 0 } }),
                new Paragraph({ text: 'Contact Details: Interactive form, WhatsApp integration buttons, and embedded Google Maps for store navigation.', bullet: { level: 0 } }),

            ]
        }]
    });

    const buffer = await Packer.toBuffer(doc);
    fs.writeFileSync('VisionLux_App_Design_Report.docx', buffer);
    console.log('Word Document Created successfully');
}

async function run() {
    await createPPT();
    await createDoc();
}

run();
