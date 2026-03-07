# NIVTO Payment Server - Deployment Package

This folder contains everything needed to deploy your payment server to production.

## Files Included
- `payment-server.js` - Main server file
- `package.json` - Dependencies and scripts
- `.env.example` - Environment variables template

## Quick Deploy to Render (5 Minutes)

### 1. Create Render Account
Go to https://render.com and sign up (it's FREE!)

### 2. Create New Web Service
1. Click "New +" button
2. Select "Web Service"
3. Choose "Deploy from GitHub" OR "Public Git repository"

### 3. Option A: Deploy from GitHub

**First time setup:**
```bash
cd C:\project\Staff_Management\payment-server-deploy
git init
git add .
git commit -m "Initial payment server deployment"
```

Then either:
- Create a new GitHub repository
- Push this code to GitHub
- Connect GitHub to Render

### 4. Option B: Manual Deploy (Easier for first time)

1. In Render dashboard, select "Public Git Repository"
2. Or use "Deploy from Docker"
3. Or zip this folder and upload

### 5. Configure in Render Dashboard

**Build Settings:**
- **Name**: nivto-payment
- **Environment**: Node
- **Build Command**: `npm install`
- **Start Command**: `node payment-server.js`
- **Plan**: Free

**Environment Variables** (Click "Advanced" → "Add Environment Variable"):
```
PORT=10000
NODE_ENV=production
BASE_URL=https://nivto-payment.onrender.com
YOCO_SECRET_KEY=your_actual_key
YOCO_PUBLIC_KEY=your_actual_key
EMAIL_HOST=smtp.gmail.com
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
EMAIL_FROM=NIVTO Staff Manager <noreply@nivto.com>
```

### 6. Deploy!
Click "Create Web Service" - Render will build and deploy automatically

### 7. Get Your Live URL
Render will give you a URL like: `https://nivto-payment.onrender.com`

### 8. Update Website
Once deployed, update your website with the new URL!

## Testing Your Deployment

Visit your live URL - you should see the payment page!

---

## Troubleshooting

**Build fails?**
- Check that package.json is correct
- Ensure Node version is 18+

**Server not starting?**
- Check Environment Variables are set correctly
- Look at Render logs for errors

**Emails not sending?**
- Gmail needs App Password (not regular password)
- Check EMAIL_USER and EMAIL_PASSWORD are correct

---

## Support

Questions? Contact: support@nivto.com
