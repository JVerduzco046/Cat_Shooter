(function () {
    var Particles, work;
  
    Particles = class Particles {
      constructor() {
        this.move = this.move.bind(this);
        this.setActors = this.setActors.bind(this);
        this.addStars = this.addStars.bind(this);
        this.addKnot = this.addKnot.bind(this);
        this.getTexture = this.getTexture.bind(this);
        this.setLighting = this.setLighting.bind(this);
        this.setStage = this.setStage.bind(this);
        // @controls = new THREE.OrbitControls( @camera, @renderer.domElement )
        // @controls.addEventListener( 'change', @render )
        // @controls.target.set( 0, 0, 0 )
        this.rotateRadians = this.rotateRadians.bind(this);
        this.animate = this.animate.bind(this);
        this.render = this.render.bind(this);
        this.setStage();
        this.setLighting();
        this.setActors();
        this.animate();
        this.move();
        this.render();
      }
  
      move() {
        anime({
          loop: true,
          targets: this.starSystem.rotation,
          z: [this.rotateRadians(360), this.rotateRadians(0)],
          x: [this.rotateRadians(360), this.rotateRadians(0)],
          y: [this.rotateRadians(360), this.rotateRadians(0)],
          duration: 20000,
          easing: "linear" });
  
        anime({
          loop: true,
          targets: this.torusSystem.rotation,
          z: [this.rotateRadians(-360), this.rotateRadians(0)],
          x: [this.rotateRadians(-360), this.rotateRadians(0)],
          y: [this.rotateRadians(-360), this.rotateRadians(0)],
          duration: 30000,
          easing: "linear" });
  
        return anime({
          loop: true,
          targets: this.sphereSystem.rotation,
          z: [this.rotateRadians(360), this.rotateRadians(0)],
          x: [this.rotateRadians(360), this.rotateRadians(0)],
          y: [this.rotateRadians(360), this.rotateRadians(0)],
          duration: 30000,
          easing: "linear" });
  
      }
  
      setActors() {
        this.addKnot();
        return this.addStars();
      }
  
      addStars() {
        var i, j, materials, x, y, z;
        this.geometry = new THREE.Geometry();
        materials = new THREE.PointsMaterial({
          color: 0xffffff,
          size: 1,
          transparent: true,
          blending: THREE.AdditiveBlending,
          map: this.getTexture(),
          depthTest: false });
  
        for (i = j = 0; j <= 1000; i = ++j) {
          x = Math.random() * 100 - 50;
          y = Math.random() * 100 - 50;
          z = Math.random() * 100 - 50;
          this.geometry.vertices.push(new THREE.Vector3(x, y, z));
        }
        this.starSystem = new THREE.Points(this.geometry, materials);
        this.starSystem.sortParticles = true;
        return this.scene.add(this.starSystem);
      }
  
      addKnot() {
        var materials;
        this.geometry = new THREE.SphereGeometry(1, 50, 50);
        materials = new THREE.PointsMaterial({
          color: 0xffffff,
          size: 1,
          transparent: true,
          blending: THREE.AdditiveBlending,
          map: this.getTexture(),
          depthTest: false });
  
        this.sphereSystem = new THREE.Points(this.geometry, materials);
        this.sphereSystem.sortParticles = true;
        this.scene.add(this.sphereSystem);
        this.geometry = new THREE.TorusKnotGeometry(5, 10, 400, 1, 4, 3);
        materials = new THREE.PointsMaterial({
          color: 0xffffff,
          size: 1,
          transparent: true,
          blending: THREE.AdditiveBlending,
          map: this.getTexture(),
          depthTest: false });
  
        this.torusSystem = new THREE.Points(this.geometry, materials);
        this.torusSystem.sortParticles = true;
        return this.scene.add(this.torusSystem);
      }
  
      getTexture() {
        var canvas, context, gradient, texture;
        canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        context = canvas.getContext('2d');
        gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2);
        gradient.addColorStop(0, 'rgba(255,255,255,1)');
        gradient.addColorStop(0.2, 'rgba(200,255,255,1)');
        gradient.addColorStop(0.4, 'rgba(0,0,124,1)');
        gradient.addColorStop(1, 'rgba(0,0,0,1)');
        context.fillStyle = gradient;
        context.fillRect(0, 0, canvas.width, canvas.height);
        texture = new THREE.Texture(canvas);
        texture.needsUpdate = true;
        return texture;
      }
  
      setLighting() {
        this.ambientLight = new THREE.AmbientLight("#ffffff", 0.5);
        return this.scene.add(this.ambientLight);
      }
  
      setStage() {
        this.renderer = new THREE.WebGLRenderer({
          canvas: document.getElementById("particles"),
          antialias: true });
  
        this.renderer.setClearColor("#000000");
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
        return this.camera.position.z = 50;
      }
  
      rotateRadians(deg) {
        return deg * (Math.PI / 180);
      }
  
      animate() {
        requestAnimationFrame(this.animate);
        // @controls.update()
        return this.render();
      }
  
      render() {
        return this.renderer.render(this.scene, this.camera);
      }};
  
  
  
    work = new Particles();
  
  }).call(this);
  
  //# sourceURL=coffeescript