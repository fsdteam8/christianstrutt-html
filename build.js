const fs = require('fs');

const services = [
  {
    slug: 'brakes',
    title: 'Brake Repairs',
    heroTitle: 'Brake Repairs in Milton Keynes –<br>Safe, Reliable & Affordable',
    heroP1: 'Your braking system is one of the most critical safety features. At <strong>PitStop Pro</strong>, we provide expert <strong>brake repairs in Milton Keynes</strong> to keep you and your passengers safe.',
    introTitle: 'Professional Brake Repairs You Can Trust',
    introP1: 'Your braking system is one of the most critical safety features of your vehicle.',
    introP2: 'We inspect and repair brakes for all makes and models, providing honest advice and transparent pricing to ensure your vehicle is safe and working exactly as it should.',
    signsTitle: 'Signs You May Need Brake Repairs',
    signsList: [
      'Squeaking or grinding noises',
      'Vibrations or pulling when pressing the pedal',
      'Reduced braking performance or longer stopping distances',
      'Brake warning light illuminated',
      'Spongy or soft brake pedal'
    ],
    servicesTitle: 'Our Brake Repair Services in Milton Keynes',
    servicesList: [
      'Brake pad replacement',
      'Brake disc replacement',
      'Brake fluid checks and replacement',
      'Brake calliper repairs',
      'Full brake system inspections',
      'ABS diagnostics/repairs'
    ],
    bmwTitle: 'BMW Brake Specialists in Milton Keynes',
    bmwP1: 'We have specialist expertise when it comes to BMW braking systems.',
    bmwP2: 'Enjoy peace of mind with our cost-effective repairs that meet manufacturer standards without the dealership price tag.'
  },
  {
    slug: 'clutches',
    title: 'Clutch Repairs',
    heroTitle: 'Clutch Repairs in Milton Keynes –<br>Reliable, Affordable & Expert Service',
    heroP1: 'Don\'t let a slipping or noisy clutch hold you back. At <strong>PitStop Pro</strong>, we provide expert <strong>clutch repairs in Milton Keynes</strong> to restore your vehicle\'s performance.',
    introTitle: 'Expert Clutch Repairs You Can Trust',
    introP1: 'Your clutch plays a vital role in transferring power from the engine to the wheels.',
    introP2: 'We promise honest advice and reliable repairs for all makes and models, ensuring your vehicle performs smoothly and efficiently.',
    signsTitle: 'Signs Your Clutch May Need Repair or Replacement',
    signsList: [
      'Difficulty changing gears',
      'Clutch slipping (engine revs increase without acceleration)',
      'Burning smell when driving',
      'Noisy clutch or unusual vibrations',
      'High biting point',
      'Clutch pedal feels stiff, loose or spongy'
    ],
    servicesTitle: 'Our Clutch Repair Services in Milton Keynes',
    servicesList: [
      'Clutch replacement',
      'Clutch plate/pressure plate replacement',
      'Flywheel inspection and replacement',
      'Hydraulic clutch repairs',
      'Clutch cable adjustments and repairs',
      'Full system diagnostics'
    ],
    bmwTitle: 'BMW Clutch Specialists in Milton Keynes',
    bmwP1: 'We offer BMW-specific knowledge for complex clutch and transmission systems.',
    bmwP2: 'Experience top-tier service and cost-effective repairs for your BMW from our experienced technicians.'
  },
  {
    slug: 'diagnostics',
    title: 'Car Diagnostics',
    heroTitle: 'Car Diagnostics in Milton Keynes –<br>Fast, Accurate Fault Finding',
    heroP1: 'Don\'t guess the cause of your vehicle\'s faults. At <strong>PitStop Pro</strong>, we provide expert <strong>car diagnostics in Milton Keynes</strong> to quickly identify the exact issue.',
    introTitle: 'Advanced Vehicle Diagnostics You Can Trust',
    introP1: 'Modern vehicles rely on complex electronics to manage everything from engine performance to safety systems.',
    introP2: 'We use up-to-date diagnostic equipment to read fault codes, analyse performance and uncover problems quickly and accurately.',
    signsTitle: 'Common Reasons You May Need a Diagnostic Check',
    signsList: [
      'Engine warning light on',
      'Loss of power or poor performance',
      'Unusual noises or vibrations',
      'Increased fuel consumption',
      'Difficulty starting',
      'Electrical faults or warning messages'
    ],
    servicesTitle: 'What Our Diagnostic Service Includes',
    servicesList: [
      'Engine diagnostics and fault code reading',
      'Electrical system diagnostics',
      'ABS and braking system checks',
      'Airbag and safety system diagnostics',
      'Transmission diagnostics',
      'Sensor and ECU fault analysis'
    ],
    bmwTitle: 'BMW Diagnostics Specialists in Milton Keynes',
    bmwP1: 'We use specialist diagnostic equipment specifically designed for BMW vehicles.',
    bmwP2: 'Our team has the expertise to accurately interpret complex fault codes and provide precise repairs for your BMW.'
  },
  {
    slug: 'exhausts',
    title: 'Exhaust Repairs',
    heroTitle: 'Exhaust Repairs in Milton Keynes –<br>Reliable, Affordable & Professional',
    heroP1: 'A noisy or failing exhaust can significantly impact your vehicle\'s efficiency. At <strong>PitStop Pro</strong>, we provide expert <strong>exhaust repairs in Milton Keynes</strong>.',
    introTitle: 'Expert Exhaust Repairs You Can Trust',
    introP1: 'The exhaust system plays a vital role in your vehicle\'s performance, fuel efficiency, and emissions.',
    introP2: 'We provide thorough inspections and high-quality repairs using premium parts to keep your vehicle running quietly and cleanly.',
    signsTitle: 'Signs Your Exhaust May Need Repair',
    signsList: [
      'Loud or unusual exhaust noise',
      'Rattling sounds under the car',
      'Reduced fuel efficiency',
      'Loss of engine performance',
      'Strong exhaust fumes or smells',
      'Failed or at risk of failing MOT emissions test'
    ],
    servicesTitle: 'Our Exhaust Services in Milton Keynes',
    servicesList: [
      'Exhaust repairs',
      'Full exhaust replacement',
      'Silencer/back box replacement',
      'Catalytic converter repairs/replacement',
      'Exhaust pipe repairs',
      'Emissions checks/fault diagnosis'
    ],
    bmwTitle: 'BMW Exhaust Specialists in Milton Keynes',
    bmwP1: 'We possess extensive knowledge of complex BMW exhaust and emissions systems.',
    bmwP2: 'Our cost-effective repairs ensure your BMW remains efficient and compliant with emissions standards.'
  },
  {
    slug: 'mot-repairs',
    title: 'MOT Repairs',
    heroTitle: 'MOT Repairs in Milton Keynes –<br>Fast Fixes to Get You Back on the Road',
    heroP1: 'Has your vehicle failed its MOT? Don\'t worry. At <strong>PitStop Pro</strong>, we provide fast, expert <strong>MOT repairs in Milton Keynes</strong> to get you back on the road safely.',
    introTitle: 'Specialists in MOT Failure Repairs',
    introP1: 'We focus purely on expert repair work to address any issues identified during your MOT test.',
    introP2: 'Issues highlighted during MOTs are often straightforward to fix. Our garage carries out these repairs efficiently so you can pass your retest with flying colours.',
    signsTitle: 'MOT Advisory Repairs',
    signsList: [
      'Address advisory notes promptly to avoid future failures',
      'Prevent minor issues from becoming costly breakdowns',
      'Ensure continuous safety and legality of your vehicle',
      'Extend the lifespan of wearing parts',
      'Maintain peak vehicle performance'
    ],
    servicesTitle: 'Common MOT Repairs We Carry Out',
    servicesList: [
      'Brake repairs and replacements',
      'Suspension and steering repairs',
      'Exhaust repairs and emissions issues',
      'Tyre and wheel alignment issues',
      'Lighting and electrical faults',
      'General safety-related repairs'
    ],
    bmwTitle: 'BMW MOT Repairs Specialists in Milton Keynes',
    bmwP1: 'We combine our MOT repair knowledge with deep diagnostics expertise for BMW vehicles.',
    bmwP2: 'If your BMW has failed its MOT, our specialists will identify and resolve the issues efficiently and correctly.'
  },
  {
    slug: 'oil-changes',
    title: 'Oil Changes',
    heroTitle: 'Oil Changes in Milton Keynes –<br>Keep Your Engine Running Smoothly',
    heroP1: 'Regular oil changes protect your engine, improve efficiency, and extend your vehicle\'s life. At <strong>PitStop Pro</strong>, we provide expert <strong>oil changes in Milton Keynes</strong>.',
    introTitle: 'Professional Oil Change Service You Can Trust',
    introP1: 'Engine oil is the lifeblood of your vehicle, lubricating moving parts and preventing overheating.',
    introP2: 'We use only high-quality oil and filters to ensure your engine receives the best possible protection and performance.',
    signsTitle: 'When Should You Get an Oil Change?',
    signsList: [
      'Engine oil warning light',
      'Engine running louder than usual',
      'Reduced fuel efficiency',
      'Dirty or dark engine oil',
      'Burning smell from the engine',
      'Long time since your last service'
    ],
    servicesTitle: 'What’s Included in Our Oil Change Service',
    servicesList: [
      'Draining old engine oil safely',
      'Replacing with high-quality new oil',
      'Oil filter replacement',
      'Basic vehicle health check',
      'Inspection for any oil leaks',
      'Environmentally friendly oil disposal'
    ],
    bmwTitle: 'BMW Oil Change Specialists in Milton Keynes',
    bmwP1: 'BMW engines require exact oil specifications and careful handling.',
    bmwP2: 'Our technicians are highly experienced in servicing BMWs, ensuring the correct oil grades are always used for optimum performance.'
  },
  {
    slug: 'suspensions',
    title: 'Suspension Repairs',
    heroTitle: 'Suspension Repairs in Milton Keynes –<br>Smooth, Safe & Reliable Driving',
    heroP1: 'Suspension problems can make your car unstable and uncomfortable. At <strong>PitStop Pro</strong>, we provide expert <strong>suspension repairs in Milton Keynes</strong>.',
    introTitle: 'Expert Suspension Repairs You Can Trust',
    introP1: 'Your suspension system is responsible for keeping your tyres in contact with the road and providing a smooth ride.',
    introP2: 'We perform thorough inspections and high-quality repairs to restore your vehicle\'s comfort, handling control, and overall safety.',
    signsTitle: 'Signs Your Suspension May Need Repair',
    signsList: [
      'Bumpy or uncomfortable ride',
      'Knocking or clunking noises over bumps',
      'Vehicle pulling to one side',
      'Uneven tyre wear',
      'Poor handling or reduced stability',
      'Nose-diving when braking'
    ],
    servicesTitle: 'Our Suspension Services in Milton Keynes',
    servicesList: [
      'Shock absorber replacement',
      'Suspension spring repairs/replacement',
      'Suspension arm and bush repairs',
      'Suspension system inspections',
      'Steering and suspension diagnostics',
      'Ride-height and stability checks'
    ],
    bmwTitle: 'BMW Suspension Specialists in Milton Keynes',
    bmwP1: 'We have specific expertise in diagnosing and repairing advanced BMW suspension systems.',
    bmwP2: 'From standard setups to complex adaptive suspensions, we ensure your BMW handles exactly as the manufacturer intended.'
  },
  {
    slug: 'timing-belts',
    title: 'Timing Belts',
    heroTitle: 'Timing Belt Replacement in Milton Keynes –<br>Protect Your Engine',
    heroP1: 'A failed timing belt can cause catastrophic engine damage. At <strong>PitStop Pro</strong>, we provide expert <strong>timing belt replacement in Milton Keynes</strong>.',
    introTitle: 'Professional Timing Belt Replacement You Can Trust',
    introP1: 'The timing belt synchronises the rotation of the crankshaft and the camshaft so the engine\'s valves open and close at the proper times.',
    introP2: 'We carry out all timing belt replacements strictly to manufacturer standards, ensuring your engine remains protected and reliable.',
    signsTitle: 'When Should You Replace Your Timing Belt?',
    signsList: [
      'Vehicle has reached recommended mileage/age',
      'Service history is unknown',
      'Ticking or unusual engine noises',
      'Visible signs of wear or cracking upon inspection',
      'Your mechanic has advised replacement',
      'During a related water pump replacement'
    ],
    servicesTitle: 'Our Timing Belt Services in Milton Keynes',
    servicesList: [
      'Timing belt replacement',
      'Timing chain inspection',
      'Tensioner and pulley replacement',
      'Water pump replacement (where required)',
      'Full engine timing checks',
      'Preventative maintenance advice'
    ],
    bmwTitle: 'BMW Timing Belt Specialists in Milton Keynes',
    bmwP1: 'We have extensive experience working on complex BMW engines and timing systems.',
    bmwP2: 'Trust our experts to perform precise timing belt and chain replacements on your BMW with the utmost care and accuracy.'
  },
  {
    slug: 'water-pumps',
    title: 'Water Pump Repairs',
    heroTitle: 'Water Pump Repairs in Milton Keynes –<br>Prevent Engine Overheating',
    heroP1: 'Your vehicle\'s water pump plays a vital role in keeping the engine cool. At <strong>PitStop Pro</strong>, we provide expert <strong>water pump repairs in Milton Keynes</strong>.',
    introTitle: 'Professional Water Pump Repairs You Can Trust',
    introP1: 'The water pump circulates coolant around your engine, preventing it from overheating and suffering serious damage.',
    introP2: 'We carry out thorough inspections and high-quality repairs or replacements to ensure your cooling system is working efficiently and safely.',
    signsTitle: 'Signs Your Water Pump May Be Failing',
    signsList: [
      'Engine overheating or running hot',
      'Coolant leaks under the vehicle',
      'Whining or grinding noise from the engine',
      'Steam coming from the engine bay',
      'Low coolant warning light',
      'Frequent need to top up coolant'
    ],
    servicesTitle: 'Our Water Pump Services in Milton Keynes',
    servicesList: [
      'Water pump replacement',
      'Cooling system inspections',
      'Coolant leak detection and repair',
      'Radiator and hose checks',
      'Coolant flush and replacement',
      'Timing belt/water pump combined replacement'
    ],
    bmwTitle: 'BMW Water Pump Specialists in Milton Keynes',
    bmwP1: 'BMW cooling systems require specialised knowledge and exact procedures for repair.',
    bmwP2: 'Our team is highly experienced in repairing and replacing BMW water pumps to maintain perfect engine temperatures.'
  }
];

const template = (data) => `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.title} - PitStop Pro MK</title>

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet">

    <!-- Font Awesome for Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <!-- Custom CSS -->
    <link rel="stylesheet" href="../styles/style.css">
</head>

<body>

    <!-- Header -->
    <header class="header">
        <div class="header-inner">
            <div class="logo">
                <a href="../index.html"><img src="../images/Pitshop-Pro-logo.jpg" alt="PitStop Pro MK"></a>
            </div>
            <nav class="nav">
                <ul>
                    <li><a href="../index.html">HOME</a></li>
                    <li class="dropdown">
                        <a href="#">VEHICLE REPAIR SERVICES <i class="fas fa-chevron-down"
                                style="font-size:10px; margin-left:4px;"></i></a>
                        <ul class="dropdown-menu">
                            <li><a href="brakes.html">Brakes</a></li>
                            <li><a href="clutches.html">Clutches</a></li>
                            <li><a href="diagnostics.html">Diagnostics</a></li>
                            <li><a href="exhausts.html">Exhausts</a></li>
                            <li><a href="mot-repairs.html">MOT Repairs</a></li>
                            <li><a href="oil-changes.html">Oil Changes</a></li>
                            <li><a href="suspensions.html">Suspensions</a></li>
                            <li><a href="timing-belts.html">Timing Belts</a></li>
                            <li><a href="water-pumps.html">Water Pumps</a></li>
                        </ul>
                    </li>
                    <li><a href="#">ABOUT US</a></li>
                    <li><a href="#">CONTACT US</a></li>
                </ul>
            </nav>
            <div class="header-action">
                <a href="tel:01908482492" class="btn btn-outline-nav">CALL NOW</a>
            </div>
        </div>
    </header>

    <!-- Top Hero Section -->
    <section class="hero-top">
        <div class="container row">
            <div class="col text-col">
                <h1 style="font-size: 42px; line-height: 1.1; margin-bottom: 20px;">${data.heroTitle}</h1>
                <p>${data.heroP1}</p>
                <p>If you suspect an issue, our experienced team is here to help.</p>
                <div class="btn-group">
                    <a href="tel:01908482492" class="btn btn-primary">CALL NOW</a>
                    <a href="#" class="btn btn-outline">BOOK YOUR CAR IN</a>
                </div>
            </div>
            <div class="col img-col">
                <img src="../images/Car.png" alt="BMW Car" class="car-img" style="filter: drop-shadow(0 0 40px rgba(0,0,0,0.8));">
            </div>
        </div>
    </section>

    <!-- Professional Repairs Section -->
    <section class="section-padding section-center-text" style="padding-top: 40px; padding-bottom: 40px;">
        <div class="container">
            <h2>${data.introTitle}</h2>
            <p>${data.introP1}</p>
            <p>${data.introP2}</p>
        </div>
    </section>

    <!-- Main Content Wrapper with Particle Background -->
    <div class="page-wrapper">
        <div class="content-wrapper">

            <!-- Section 3: Signs & Services -->
            <section class="section-padding">
                <div class="container row">
                    <div class="col">
                        <h2>${data.signsTitle}</h2>
                        <p>Look out for these common warning signs:</p>
                        <ul class="check-list">
                            ${data.signsList.map(item => `<li><i class="fas fa-check-circle"></i> ${item}</li>`).join('\\n                            ')}
                        </ul>
                    </div>
                    <div class="col">
                        <h2>${data.servicesTitle}</h2>
                        <p>We provide a full range of services, including:</p>
                        <ul class="check-list">
                            ${data.servicesList.map(item => `<li><i class="fas fa-check-circle"></i> ${item}</li>`).join('\\n                            ')}
                        </ul>
                    </div>
                </div>
            </section>

            <!-- Section 4: BMW Specialists -->
            <section class="section-padding section-reverse">
                <div class="container row">
                    <div class="col img-col">
                        <img src="../images/Car.png" alt="BMW Car" class="car-img">
                    </div>
                    <div class="col text-col">
                        <h2>${data.bmwTitle}</h2>
                        <p>${data.bmwP1}</p>
                        <p>${data.bmwP2}</p>
                        <p>From routine servicing to complex mechanical issues, we provide trusted BMW care for local
                            drivers who want expert support and real value.</p>
                        <div class="btn-group">
                            <a href="tel:01908482492" class="btn btn-primary">CALL NOW</a>
                            <a href="#" class="btn btn-outline">BOOK YOUR CAR IN</a>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Section 5: Features Lists -->
            <section class="section-padding">
                <div class="container row">
                    <div class="col">
                        <h2>Why Choose Our Milton Keynes Garage?</h2>
                        <p>Choosing the right garage can make all the difference. Here's why customers trust PitStop Pro.</p>
                        <ul class="check-list">
                            <li><i class="fas fa-check-circle"></i> Family-run, friendly and honest service</li>
                            <li><i class="fas fa-check-circle"></i> Experienced and qualified technicians</li>
                            <li><i class="fas fa-check-circle"></i> Competitive and transparent pricing</li>
                            <li><i class="fas fa-check-circle"></i> Fast turnaround times where possible</li>
                            <li><i class="fas fa-check-circle"></i> BMW specialist knowledge</li>
                            <li><i class="fas fa-check-circle"></i> Trusted local Milton Keynes experts</li>
                        </ul>
                        <p>We take pride in delivering dependable workmanship and service you can rely on.</p>
                    </div>
                    <div class="col">
                        <h2>Serving Milton Keynes & Surrounding Areas</h2>
                        <p>We proudly serve customers across:</p>
                        <ul class="check-list">
                            <li><i class="fas fa-check-circle"></i> Milton Keynes</li>
                            <li><i class="fas fa-check-circle"></i> Bletchley</li>
                            <li><i class="fas fa-check-circle"></i> Newport Pagnell</li>
                            <li><i class="fas fa-check-circle"></i> Wolverton</li>
                            <li><i class="fas fa-check-circle"></i> Stony Stratford</li>
                        </ul>
                        <p>If you're searching for a <strong>"car garage near me in Milton Keynes"</strong>, we're your local, trusted choice.</p>
                    </div>
                </div>
            </section>

            <!-- Section 6: Contact & Map -->
            <section class="section-padding">
                <div class="container row">
                    <div class="col">
                        <h2>Book Your Car Repair Today</h2>
                        <p><strong>Need a reliable mechanic in Milton Keynes?</strong></p>
                        <ul class="icon-list">
                            <li><i class="fas fa-phone-alt"></i> Call us today to discuss your vehicle</li>
                            <li><i class="fas fa-map-marker-alt"></i> Visit our Milton Keynes garage</li>
                            <li><i class="far fa-calendar-check"></i> Book your appointment at a time that suits you</li>
                        </ul>
                        <p>Our team is ready to help with everything from diagnostics and servicing to urgent repairs and MOT work. We'll get you back on the road quickly, safely, and with complete peace of mind.</p>
                    </div>
                    <div class="col">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156683.9161749811!2d-0.898863641246387!3d52.04015671158552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48764cd93c20c023%3A0xc6bf31e330541bc5!2sMilton%20Keynes!5e0!3m2!1sen!2suk!4v1714488998124!5m2!1sen!2suk"
                            width="100%" height="300" style="border:0; border-radius: 8px;" allowfullscreen=""
                            loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </section>

            <!-- Section 7: Bottom CTA -->
            <section class="section-padding section-bottom-cta">
                <div class="container">
                    <h2>Trusted Car Repairs in Milton Keynes</h2>
                    <p><strong>PitStop Pro</strong> is a trusted <strong>car garage in Milton Keynes</strong> offering expert vehicle repairs, servicing, diagnostics, and specialist BMW repairs.</p>
                    <p>From oil changes and brakes to clutches, timing belts, water pumps, suspensions, exhausts, and MOT repairs - we deliver reliable garage services you can depend on.</p>
                    <div class="btn-group">
                        <a href="tel:01908482492" class="btn btn-primary">CALL NOW</a>
                        <a href="#" class="btn btn-outline">BOOK YOUR CAR IN</a>
                    </div>
                </div>
            </section>

        </div> <!-- End of content-wrapper -->
    </div> <!-- End of page-wrapper -->

    <!-- Footer -->
    <footer class="footer">
        <div class="container footer-content">
            <p>Copyright &copy; 2024 - PitStop Pro. 142 Newport Road, New Bradwell, Milton Keynes, MK13 0AA</p>
            <a href="#" class="scroll-top"><i class="fas fa-chevron-up"></i></a>
        </div>
    </footer>

    <!-- Fixed Floating Contact -->
    <div class="floating-contact">
        <a href="tel:01908482492" class="float-call">
            <i class="fas fa-phone-alt"></i>
            <div>
                <span class="float-title">Call Us</span>
                <span class="float-detail">01908 482 492</span>
            </div>
        </a>
        <a href="mailto:info@pitstoppromk.co.uk" class="float-email">
            <i class="fas fa-envelope"></i>
            <div>
                <span class="float-title">Email Us</span>
                <span class="float-detail">info@pitstoppromk.co.uk</span>
            </div>
        </a>
    </div>

</body>
</html>`;

services.forEach(service => {
  fs.writeFileSync(`services/${service.slug}.html`, template(service));
  console.log(`Generated services/${service.slug}.html`);
});
