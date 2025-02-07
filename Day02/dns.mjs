import dns from 'dns/promises';

const ip = await dns.lookup('www.naver.com');
console.log('Ip',ip);

const a = await dns.resolve('gilbut.co.kr','A');
console.log('A',a);

const mx = await dns.resolve('gilbut.co.kr','MX');
console.log('MX',mx);


const cname = await dns.resolve('gilbut.co.kr','CNAME');
console.log('CNAME',cname);


const any = await dns.resolve('gilbut.co.kr','ANY');
console.log('ANY',any);