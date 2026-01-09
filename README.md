# ICMBSD-2026 Conference Website

A professional, responsive website for the **International Conference on Microbial Biotechnology for Sustainable Development in Environment and Agriculture (ICMBSD-2026)**.

## 🎯 Conference Details

- **Dates:** 6–7 February 2026
- **Venue:** Auditorium, International Research Centre (IRC), First Floor
- **Organized By:** 
  - Centre for Drug Discovery and Development (CDDD)
  - Centre for Modern Organic Agriculture Research (CMOAR)
- **Institute:** Sathyabama Institute of Science & Technology

## 🚀 Tech Stack

- **Framework:** Next.js 16.1.1 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Ready for Vercel, Netlify, or any static hosting

## 📁 Project Structure

```
icmbsd/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with SEO metadata
│   │   ├── page.tsx             # Main conference page
│   │   └── globals.css          # Global styles & animations
│   ├── components/
│   │   ├── Hero.tsx             # Hero section with CTA
│   │   ├── Section.tsx          # Reusable section wrapper
│   │   ├── AboutSections.tsx    # Institute, Conference, Centre info
│   │   ├── Speakers.tsx         # International & National speakers
│   │   ├── ImportantDates.tsx   # Timeline of key dates
│   │   ├── Registration.tsx     # Registration info & CTA
│   │   ├── Contact.tsx          # Contact information
│   │   └── Footer.tsx           # Footer with links
│   └── lib/
│       └── constants.ts         # All conference data
├── public/                      # Static assets
└── ...config files
```

## 🎨 Features

✅ **Fully Responsive** - Mobile, tablet, and desktop optimized  
✅ **SEO Optimized** - Comprehensive metadata and semantic HTML  
✅ **Smooth Scrolling** - Navigation with anchor links  
✅ **Professional Design** - Clean academic theme with green/blue palette  
✅ **Reusable Components** - Modular and maintainable code  
✅ **Type-Safe** - Full TypeScript support  
✅ **Performance** - Optimized with Next.js App Router  

## 🛠️ Development

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Build for Production

```bash
npm run build
npm start
```

## 📝 Customization Guide

### Update Conference Data

Edit [`src/lib/constants.ts`](src/lib/constants.ts) to update:
- Conference details (dates, venue, fees)
- Speaker information
- Important dates
- Contact information
- Organizer details

### Update Registration Link

Replace the placeholder Google Form link in `constants.ts`:
```typescript
registrationLink: "https://forms.google.com/your-actual-form-link"
```

### Modify Styling

- **Colors:** Update Tailwind classes in components (green/blue theme)
- **Fonts:** Modify in `src/app/layout.tsx`
- **Animations:** Edit in `src/app/globals.css`

### Add/Remove Sections

Components are imported in `src/app/page.tsx`. Simply add or remove imports and JSX elements.

## 🌐 Deployment

### Deploy to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Deploy to Netlify

```bash
npm run build
# Upload '.next' folder to Netlify
```

## 📧 Contact

**Organizing Secretary:**  
Dr. Arunkumar Palaniappan  
Email: icmbsd2026@sathyabama.ac.in  
Phone: +91 98765 43210

## 📚 Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

---

**Built with ❤️ for academic excellence and sustainable development**

