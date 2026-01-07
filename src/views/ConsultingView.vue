<template>
  <div class="bg-white" v-auto-animate>
    <!-- Hero Section with VSL Style -->
    <section class="relative bg-dark pt-32 pb-24 overflow-hidden">
         <!-- Dynamic Background -->
         <div class="absolute inset-0">
            <div class="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
            <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>
            <!-- Grid Pattern -->
             <div class="absolute inset-0 opacity-5 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
         </div>

         <div class="container mx-auto px-4 relative z-10">
            <div class="max-w-4xl mx-auto text-center">
                <span class="inline-block py-2 px-4 rounded-lg bg-red-900/30 text-red-500 border border-red-500/20 font-mono text-sm tracking-widest mb-8 uppercase font-bold">
                    ⚠️ Solo para empresas activas (+$2k/mes)
                </span>
                <h1 class="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                    Deja de jugar a la <span class="text-primary italic">"Lotería de los Anuncios"</span>. <br>
                    Escala tu Facturación con <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary to-orange-400">Ingeniería de Datos</span>.
                </h1>
                <p class="text-xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto">
                    La mayoría de agencias solo "promocionan publicaciones". Nosotros construimos <strong>Ecosistemas de Ventas Automatizados</strong> usando Inteligencia Artificial y Embudos de Alta Conversión.
                </p>
                <a href="#aplicar" class="inline-flex items-center bg-primary hover:bg-primary-dark text-dark font-black text-xl px-10 py-5 rounded-full transition-all hover:scale-105 shadow-[0_0_40px_rgba(242,188,42,0.4)]">
                    Agendar Sesión de Cualificación
                    <i class="ph-arrow-right font-bold ml-3"></i>
                </a>
                <p class="mt-6 text-sm text-gray-500">
                    <i class="ph-lock-key mr-1"></i> Sesión Gratuita de 30 min para evaluar tu caso.
                </p>
            </div>
         </div>
    </section>

    <!-- The Problem / Agitation -->
    <section class="py-24 bg-white">
        <div class="container mx-auto px-4">
            <div class="max-w-5xl mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 class="text-3xl font-black text-gray-900 mb-6">El problema de las "Agencias Tradicionales"</h2>
                        <div class="space-y-6">
                            <div class="flex items-start">
                                <div class="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                                    <i class="ph-x text-red-600 text-xl font-bold"></i>
                                </div>
                                <div class="ml-6">
                                    <h4 class="font-bold text-lg mb-2">Métricas Vanidosas</h4>
                                    <p class="text-gray-600">Te reportan "Likes" y "Alcance", pero no saben decirte cuánto te costó adquirir un cliente real (CPA) ni cuál es tu retorno de inversión (ROAS).</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                                    <i class="ph-x text-red-600 text-xl font-bold"></i>
                                </div>
                                <div class="ml-6">
                                    <h4 class="font-bold text-lg mb-2">Desconexión Tecnológica</h4>
                                    <p class="text-gray-600">No integran tus anuncios con tu CRM o WhatsApp. Pierdes leads porque no hay automatización de seguimiento.</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                                    <i class="ph-x text-red-600 text-xl font-bold"></i>
                                </div>
                                <div class="ml-6">
                                    <h4 class="font-bold text-lg mb-2">Falta de Estrategia Full-Funnel</h4>
                                    <p class="text-gray-600">Solo atacan a tráfico frío. No tienen sistemas de Retargeting ni LTV (Lifetime Value) para maximizar cada dólar.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative">
                        <div class="absolute inset-0 bg-secondary/5 rounded-3xl transform rotate-3"></div>
                        <div class="bg-gray-900 text-white p-8 rounded-3xl relative z-10 shadow-2xl">
                            <h3 class="text-2xl font-bold mb-6 text-primary">La Diferencia Ads Vzla:</h3>
                            <p class="text-gray-300 text-lg mb-6 font-mono">
                                > Connecting Facebook API... OK<br>
                                > Syncing CRM (HubSpot/Odoo)... OK<br>
                                > AI Segmentation... RUNNING<br>
                            </p>
                            <p class="text-white font-medium leading-relaxed">
                                No solo compramos tráfico. <strong class="text-primary">Programamos tu éxito.</strong> <br><br>
                                Al tener un background en Ingeniería de Software, conectamos los cables que otros ni saben que existen. Usamos Python para analizar tus datos y n8n para automatizar tus procesos.
                            </p>
                            <div class="mt-8 flex items-center gap-4 border-t border-gray-700 pt-6">
                                <div class="text-left">
                                    <p class="text-xs text-gray-400 uppercase tracking-widest">Stack Tecnológico</p>
                                    <div class="flex gap-3 mt-2">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" class="h-6 opacity-80" title="Laravel">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" class="h-6 opacity-80" title="Python">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" class="h-6 opacity-80" title="Meta">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- The Solution / Benefits -->
    <section class="py-24 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <span class="text-secondary font-bold tracking-widest uppercase text-sm">Consultoría Premium</span>
                <h2 class="text-4xl font-black text-gray-900 mt-2 mb-4">¿Qué incluye el Plan Trafficker PRO?</h2>
                <p class="text-gray-500 max-w-2xl mx-auto">Una solución "Done-For-You" donde nos convertimos en tu departamento de crecimiento.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <!-- Benefit 1 -->
                <div class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100">
                    <i class="ph-strategy text-5xl text-primary mb-6"></i>
                    <h3 class="text-xl font-bold mb-3">Estrategia Omnicanal</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        No dependemos de un solo canal. Diseñamos una estrategia que persigue a tu cliente ideal por Facebook, Instagram, Google y Email hasta que compra.
                    </p>
                </div>
                <!-- Benefit 2 -->
                <div class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100">
                    <i class="ph-robot text-5xl text-primary mb-6"></i>
                    <h3 class="text-xl font-bold mb-3">Automatización (n8n/Zapier)</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Cuando entra un lead, ¿qué pasa? Nosotros automatizamos el envío de mensajes de bienvenida, registro en CRM y notificaciones a tu equipo de ventas al instante.
                    </p>
                </div>
                <!-- Benefit 3 -->
                <div class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100">
                    <i class="ph-chart-bar text-5xl text-primary mb-6"></i>
                    <h3 class="text-xl font-bold mb-3">Dashboard en Tiempo Real</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Olvídate de esperar a fin de mes. Tendrás un Dashboard (Looker Studio/Power BI) para ver cuánto dinero estás ganando en tiempo real.
                    </p>
                </div>
                 <!-- Benefit 4 -->
                <div class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100">
                    <i class="ph-users-three text-5xl text-primary mb-6"></i>
                    <h3 class="text-xl font-bold mb-3">Consultoría 1 a 1 Semanal</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Reuniones estratégicas semanales conmigo (Alfredo) para revisar números, optimizar ofertas y planificar la siguiente escala.
                    </p>
                </div>
                 <!-- Benefit 5 -->
                <div class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100">
                    <i class="ph-paint-brush-broad text-5xl text-primary mb-6"></i>
                    <h3 class="text-xl font-bold mb-3">Auditoría de Creativos</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Te decimos exactamente qué videos y qué imágenes grabar. Te damos guiones basados en neuroventas y hooks virales.
                    </p>
                </div>
                 <!-- Benefit 6 -->
                <div class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100">
                    <i class="ph-rocket-launch text-5xl text-primary mb-6"></i>
                    <h3 class="text-xl font-bold mb-3">Escalado Agresivo</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Cuando encontramos el anuncio ganador, aplicamos estrategias de escalado (Horizontal/Vertical) para multiplicar la facturación sin disparar los costos.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Authority / Why Me -->
    <section class="py-20 bg-dark text-white relative overflow-hidden">
        <div class="absolute inset-0 bg-primary/5"></div>
        <div class="container mx-auto px-4 relative z-10">
            <div class="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
                <div class="w-full md:w-1/3">
                    <img src="@/assets/CEO.png" alt="Alfredo Romero" class="rounded-3xl border-4 border-primary shadow-[0_0_30px_rgba(242,188,42,0.3)]">
                </div>
                <div class="w-full md:w-2/3">
                    <h2 class="text-3xl font-black mb-6">¿Por qué confiar tu presupuesto en mí?</h2>
                    <p class="text-gray-300 text-lg mb-6">
                        "Lo que no se mide, no se puede mejorar". Esa es mi máxima como ingeniero.
                    </p>
                    <p class="text-gray-300 text-lg mb-6">
                        He manejado presupuestos desde $500 hasta $10,000 mensuales, y he visto cómo pequeños ajustes técnicos pueden duplicar la rentabilidad de un negocio. No soy una agencia gigante donde eres "un número más". Soy un partner estratégico obsesionado con tus resultados.
                    </p>
                    <div class="flex items-center gap-2">
                        <i class="ph-signature text-6xl text-primary opacity-50"></i>
                         <div>
                            <p class="font-bold text-xl">Alfredo Romero</p>
                            <p class="text-primary text-sm">CEO Ads Vzla</p>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA / Application -->
    <section id="aplicar" class="py-24 bg-white">
        <div class="container mx-auto px-4">
            <div class="max-w-3xl mx-auto bg-gray-50 border border-gray-200 rounded-[2.5rem] p-10 md:p-16 text-center shadow-xl relative overflow-hidden">
                <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary"></div>
                
                <h2 class="text-3xl md:text-4xl font-black text-gray-900 mb-6">¿Listo para escalar?</h2>
                <p class="text-gray-600 text-lg mb-10">
                    Este servicio es exclusivo y trabajo con un cupo limitado de clientes al mes para garantizar la calidad. Si facturas más de $2,000/mes y quieres delegar tu crecimiento digital, hablemos.
                </p>

                <div class="flex flex-col gap-4 max-w-md mx-auto">
                    <a href="https://wa.me/584222536796?text=Hola%20Alfredo,%20vi%20tu%20landing%20de%20Consultor%C3%ADa%20Premium.%20Quiero%20aplicar%20para%20una%20sesi%C3%B3n." class="bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl text-lg flex items-center justify-center gap-3 transition-transform hover:-translate-y-1 shadow-lg hover:shadow-green-500/30">
                        <i class="ph-whatsapp-logo text-2xl"></i>
                        Aplicar vía WhatsApp
                    </a>
                    <p class="text-xs text-center text-gray-400 mt-2">
                        *Sin compromiso. Analizaremos si somos el fit correcto para tu negocio.
                    </p>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Logic can be added here if needed
</script>
