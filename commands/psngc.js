const Discord = require("discord.js");
const usedCommandRecently4 = new Set();

module.exports.run = async (bot, message, args) => {
// Add the code under   
if (!message.guild) return;
if (message.content === '=psngc'){
message.channel.send({embed: {
  color: 3447003,
  description: "Successfully generated a PSN Gift Card Code and sent to DMs!"
}});
  
     
      
    var string = `
BH8W-EJ77-JX60
6Y1H-VPYD-S99T
URIF-3JMZ-KMS1
44FO-M3L6-U3XE
W9IR-N9ZY-0TZT
DMN4-E0MY-731C
CA9J-OVGT-51LI
AEM1-J6PP-9I1O
3RGD-HLYZ-5GII
8JWE-S00W-N221
6BFP-IPAB-ZOGK
5LFH-31MA-6O77
D2XQ-N0K3-1X14
GEUL-SFKM-MV0R
BZ8R-B5Q3-9OSO
CETC-54KC-Q8ZJ
QT0Z-DBI3-AP6T
ZDLX-IP2W-C0WX
V770-L41W-AOWI
0OGE-VT4I-3DX7
L96X-ZQK0-2APB
CE5D-HCP5-1JS5
OLV0-2ITF-UWZI
E3YG-WBKC-ZM51
7VGY-V7TI-AZJV
CAZ8-CIKH-S81K
OVQ3-TXB2-HIBA
F4QN-W1AU-9PYZ
JC8U-KPWO-92NJ
VUGM-B92I-N7NZ
UY2V-YMP8-P50R
MX08-RQJT-1GPU
MRF0-FAG7-T6U1
SSBR-BPS4-JEU8
CGRA-05X2-YMWK
JLNR-JRM6-P3JA
AOJ1-7Y29-VCDP
XHJS-Z05H-4TZM
RZ97-H9S3-Z2KZ
5VD4-H3TX-XVKB
UKN0-HNJK-7JVB
J919-F5NS-Y1WP
NOS0-WBL9-48IB
83A2-M9CS-67EC
ME61-WLY9-TVU9
7YHV-HFJN-WE8O
2PI3-TUZQ-PYZT
RBUP-DX44-MA31
QERO-RP9I-TUX6
LCJ3-HSOB-QDY8
OTGB-JYH2-EKU5
WCLH-2P9E-609I
DWGZ-Q7WF-JXSK
GH1Z-739R-SQKE
2XS7-83FS-800M
OSTL-NWPZ-CBXQ
DYB0-O8WJ-NB1U
SCQI-VYT7-L4IM
OORM-2SLU-CF3O
DJ5C-9F2L-0M3E
TC21-29QC-KE8W
QRU5-GZZF-Z624
GANX-E4Y7-LQRF
71OA-WH2B-RXJG
XGHH-4NI9-H720
R0VZ-B14X-WF6V
G2I9-RTBE-Q36D
RA6Z-RTJL-H1LR
NYTL-13K5-XU4B
TQHR-EIH2-CP3C
79E4-K0X2-P5ZD
6VD4-T5F0-0PUH
X1QC-62FF-6HN3
8E0Z-VT5F-GUZA
4AP6-TA0S-K7B8
ZR52-REZ8-GB3W
IQN9-A5OD-1164
02B7-S18G-38T1
9B6V-V3PC-3SER
IXYF-LXPP-93VB
88WO-PWNJ-M8BO
8191-K4PW-1YWX
ABYE-5OYM-VFFW
LEA4-CKZV-2ANY
SLRZ-K1RP-N7T2
9QKV-AI8L-NVGX
6AWM-OICI-HR03
LLNF-QNOW-0LQU
9SDY-UQ8J-RUYC
4P1L-9SI0-60IC
ZY6T-TTKK-LSGI
1490-I1X6-Z73S
IYHD-0BR9-MT7R
NUGX-FUPT-RSM2
CF31-XB5E-2I7C
BBVZ-8UTA-ZRPL
FYF1-KTI8-1X34
SB9J-9FYX-3L3M
7HCK-NU6Y-Z93U
E0DZ-KC1V-PYRI`

    
    var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
    message.author.send(`${random}`);
};
};


module.exports.help = {
//type the name of the command but you dont have too
  name: "sample"
}