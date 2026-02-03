# Maddie Mabry Website - Complete Deployment Guide

## 🎉 Your Website is Ready!

I've built you a complete, modern EPK website that matches your Wix site but is optimized for Netlify hosting.

## 📁 What's Included

Your website package contains:
- ✅ **index.html** - Main homepage with all your content
- ✅ **contact.html** - Dedicated contact page with booking form
- ✅ **styles.css** - All styling and responsive design
- ✅ **script.js & contact.js** - Interactive features and animations
- ✅ **images/** - All your photos optimized for web
- ✅ **videos/** - Your performance videos
- ✅ **netlify.toml** - Netlify configuration for optimal performance
- ✅ **README.md** - Documentation and customization guide

## 🚀 Deploying to Netlify (3 Easy Options)

### OPTION 1: Drag & Drop (Fastest - 2 Minutes!)

This is the quickest way to get your site live:

1. **Sign up for Netlify** (it's free!)
   - Go to https://www.netlify.com/
   - Click "Sign up" and use your email or GitHub

2. **Deploy your site**
   - Click "Add new site" → "Deploy manually"
   - Drag the entire `maddie-mabry-site` folder into the upload area
   - Wait 30 seconds for deployment
   - Your site is LIVE! 🎊

3. **Get your URL**
   - Netlify will give you a URL like: `https://sparkly-name-12345.netlify.app`
   - You can change this to something like `maddie-mabry.netlify.app` in Site Settings

### OPTION 2: GitHub (Best for Future Updates)

This method lets you update your site by just pushing changes to GitHub:

1. **Create a GitHub account** (if you don't have one)
   - Go to https://github.com/
   - Sign up for free

2. **Create a new repository**
   - Click the "+" icon → "New repository"
   - Name it "maddie-mabry-website"
   - Make it Public
   - Don't add README (we already have one)
   - Click "Create repository"

3. **Upload your files to GitHub**
   - On the next page, click "uploading an existing file"
   - Drag all files from your `maddie-mabry-site` folder
   - Click "Commit changes"

4. **Connect to Netlify**
   - Go to https://www.netlify.com/ and login
   - Click "Add new site" → "Import an existing project"
   - Select "GitHub"
   - Choose your `maddie-mabry-website` repository
   - Click "Deploy site"

5. **Done!** Your site auto-deploys whenever you push changes to GitHub

### OPTION 3: Netlify CLI (For Tech-Savvy Users)

If you're comfortable with command line:

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Navigate to your site folder
cd maddie-mabry-site

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

## 🌐 Setting Up a Custom Domain

Want to use **maddiemabry.com** instead of the Netlify URL?

### If you already own a domain:

1. In Netlify, go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., maddiemabry.com)
4. Follow the DNS instructions Netlify provides
5. Update your domain registrar's DNS settings
6. Wait 24-48 hours for DNS to propagate
7. Netlify automatically adds free SSL (https)!

### If you need to buy a domain:

Popular registrars:
- **Namecheap** (cheapest, ~$10/year)
- **Google Domains** (easy to use)
- **GoDaddy** (most well-known)

Buy your domain, then follow the steps above.

## 📧 Setting Up the Newsletter (Brevo)

Your newsletter form is ready - you just need to activate it:

### Method 1: Using Brevo API (Full Integration)

1. **Create a Brevo account**
   - Go to https://www.brevo.com/
   - Sign up for FREE (300 emails/day)

2. **Get your API key**
   - Go to Settings → SMTP & API → API Keys
   - Create a new API key
   - Save it somewhere safe

3. **For now, form submissions will show a success message**
   - To fully integrate Brevo, you'll need to add server-side code
   - I recommend using **Netlify Functions** (I can help with this later)

### Method 2: Using Netlify Forms (Simpler)

This is easier and collects emails in your Netlify dashboard:

1. In **index.html**, I've already set up the form
2. After deployment, submissions appear in your Netlify dashboard
3. Go to your site → Forms tab to see submissions
4. Set up email notifications in Form settings
5. Export emails to Brevo manually or use Zapier to automate

**My recommendation**: Start with Netlify Forms, then upgrade to Brevo API later if needed.

## ✉️ Contact Form Setup

The contact form on the Contact page works the same way:

**Option 1: Netlify Forms** (Recommended)
- Form submissions go to your Netlify dashboard
- You get email notifications
- Free and simple!

**Option 2: Custom backend**
- Use a service like Formspree, EmailJS, or SendGrid
- I can help set this up later if needed

## 🎨 Customizing Your Site

### Changing Colors

Edit `styles.css` and find these lines near the top:

```css
:root {
    --primary-color: #2c2c2c;      /* Change main dark color */
    --secondary-color: #f4f4f4;    /* Change background color */
    --accent-color: #8b7355;       /* Change accent/link color */
}
```

### Updating Photos

1. Replace images in the `images/` folder
2. Keep the same filenames OR
3. Update the filename in `index.html` where it's referenced

### Updating Videos

1. Replace videos in `videos/` folder OR
2. Update YouTube links in `index.html`

### Changing Text

All text content is in `index.html` - just open it in any text editor and change the text between the HTML tags.

## 📱 Mobile Responsive

Your site automatically adjusts to look great on:
- ✅ Desktop computers
- ✅ Tablets
- ✅ Mobile phones
- ✅ All screen sizes

## ⚡ Performance Features

Your site includes:
- **Fast loading** - Optimized images and code
- **SEO friendly** - Proper meta tags for Google
- **Secure** - Free SSL certificate from Netlify
- **Global CDN** - Fast loading worldwide
- **Lazy loading** - Images load as you scroll
- **Smooth animations** - Professional fade-ins

## 🔧 Troubleshooting

### Videos not playing?
- Make sure video files are in the `videos/` folder
- Check that filenames match exactly in the HTML

### Images not showing?
- Verify images are in the `images/` folder
- Check that filenames are correct (case-sensitive!)

### Newsletter form not working?
- After Netlify deployment, enable Netlify Forms in Site Settings
- Or implement Brevo integration (I can help!)

### Need to update the site?
- Edit the files locally
- Re-deploy to Netlify (drag & drop again OR push to GitHub)

## 📞 Need Help?

If you run into any issues:
1. Check the Netlify documentation: https://docs.netlify.com/
2. Brevo documentation: https://developers.brevo.com/
3. Feel free to ask me for help!

## 🎯 Next Steps

1. ✅ Deploy to Netlify (use Option 1 for quickest start)
2. ✅ Test your site on mobile and desktop
3. ✅ Set up custom domain (optional)
4. ✅ Configure newsletter integration
5. ✅ Share your new site on social media!

## 📊 Recommended Free Tools

- **Google Analytics** - Track your visitors
- **Google Search Console** - Monitor SEO
- **Mailchimp/Brevo** - Email marketing
- **Canva** - Create graphics for social media

---

**Your site is complete and ready to launch! 🚀**

Questions? Just ask! I'm here to help you succeed.
