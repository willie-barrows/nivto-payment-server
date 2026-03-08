const nodemailer = require('nodemailer');

console.log('🧪 Testing email configuration...\n');

const config = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'willie.barrows@gmail.com',
        pass: 'fwxj zucp pppu alnp'
    }
};

console.log('Config:', {
    host: config.host,
    port: config.port,
    user: config.auth.user,
    passLength: config.auth.pass.length
});

const transporter = nodemailer.createTransport(config);

async function testEmail() {
    try {
        // Test connection
        console.log('\n1️⃣ Testing SMTP connection...');
        await transporter.verify();
        console.log('✅ SMTP connection successful!\n');
        
        // Send test email
        console.log('2️⃣ Sending test email...');
        const info = await transporter.sendMail({
            from: 'NIVTO Staff Manager <noreply@nivto.com>',
            to: 'willie.barrows@gmail.com',
            subject: '✅ NIVTO Email Test - Success!',
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
                    <h1>🎉 Email Working!</h1>
                    <p>Your Gmail SMTP configuration is correct.</p>
                    <p><strong>Test Time:</strong> ${new Date().toLocaleString()}</p>
                </div>
            `,
            text: 'Email test successful! Gmail SMTP is working correctly.'
        });
        
        console.log('✅ Email sent successfully!');
        console.log('📧 Message ID:', info.messageId);
        console.log('\n✅ CHECK YOUR INBOX: willie.barrows@gmail.com\n');
        
    } catch (error) {
        console.error('\n❌ Email test failed!');
        console.error('Error:', error.message);
        console.error('Code:', error.code);
        console.error('\nPossible issues:');
        console.error('- App password expired or incorrect');
        console.error('- 2-Step Verification disabled on Google account');
        console.error('- Gmail blocking less secure apps');
        process.exit(1);
    }
}

testEmail();
