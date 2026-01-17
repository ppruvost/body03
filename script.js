// Tableau des points d'acupression (exemple : nom, position 3D, état par défaut)
const acupressurePoints = [
    { name: "Point 1", position: { x: 0.5, y: 1.2, z: 0 }, status: "unknown" },
    { name: "Point 2", position: { x: -0.3, y: 0.8, z: 0.2 }, status: "unknown" },
    // Ajoutez d'autres points ici...
];

// Variable pour afficher/masquer les points
let showPoints = true;

// Fonction pour créer les points 3D
function createAcupressurePoints(scene) {
    acupressurePoints.forEach((point, index) => {
        const geometry = new THREE.SphereGeometry(0.05, 16, 16);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Vert par défaut
        const sphere = new THREE.Mesh(geometry, material);
        sphere.position.set(point.position.x, point.position.y, point.position.z);
        sphere.userData = { index: index, status: point.status };
        sphere.name = `acupressure-point-${index}`;
        scene.add(sphere);

        // Gestion du clic sur un point
        sphere.addEventListener("click", (event) => {
            event.stopPropagation();
            const status = document.getElementById("status-select").value;
            point.status = status;
            sphere.material.color.set(status === "free" ? 0x00ff00 : 0xff0000);
            updateAnalysisResult();
        });
    });
}

// Mise à jour du résultat de l'analyse
function updateAnalysisResult() {
    const blockedPoints = acupressurePoints.filter(p => p.status === "blocked");
    document.getElementById("analysis-result").textContent =
        `Points bloqués : ${blockedPoints.length}/${acupressurePoints.length}`;
}

// Gestion du bouton Afficher/Masquer
document.getElementById("toggle-points").addEventListener("click", () => {
    showPoints = !showPoints;
    acupressurePoints.forEach((_, index) => {
        const point = scene.getObjectByName(`acupressure-point-${index}`);
        point.visible = showPoints;
    });
});

// Appel initial (à placer dans votre fonction d'initialisation Three.js)
createAcupressurePoints(scene);
