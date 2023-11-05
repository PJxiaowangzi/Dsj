/******************************

脚本功能：TIDAL解锁HiFi Plus
软件版本：2.48.0【美区下载】
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************
$done({
    body: JSON.stringify({
        "status": "ACTIVE",
        "canGetTrial": false,
        "startDate": "2019-09-28T09:09:09.000+0000",
        "subscription": {
            "type": "PREMIUM_PLUS",
            "offlineGracePeriod": 999999
        },
        "premiumAccess": true,
        "paymentType": "ADYEN_CREDIT_CARD",
        "paymentOverdue": false,
        "highestSoundQuality": "HI_RES",
        "validUntil": "2999-09-28T09:09:09.000+0000"
    })
});
