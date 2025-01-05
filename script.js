// Carregar informações ao abrir a página
window.addEventListener("DOMContentLoaded", () => {
    loadProfile();
});

// Salvar e exibir a foto de perfil
const uploadPhoto = document.getElementById("upload-photo");
const profileImg = document.getElementById("profile-img");
const savePhotoBtn = document.getElementById("save-photo");

savePhotoBtn.addEventListener("click", () => {
    const file = uploadPhoto.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            const imgData = reader.result;
            localStorage.setItem("profilePhoto", imgData); // Salva no banco de dados simulado
            profileImg.src = imgData; // Atualiza a imagem na interface
            alert("Foto de perfil salva com sucesso!");
        };
        reader.readAsDataURL(file);
    } else {
        alert("Selecione uma foto antes de salvar!");
    }
});

// Salvar informações pessoais
const profileForm = document.getElementById("profile-form");

profileForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    if (name && email && phone) {
        const profileData = {
            name,
            email,
            phone,
        };

        localStorage.setItem("profileData", JSON.stringify(profileData)); // Salva no banco de dados simulado
        alert("Informações salvas com sucesso!");
    } else {
        alert("Preencha todos os campos antes de salvar.");
    }
});

// Carregar informações do banco de dados
function loadProfile() {
    // Carregar foto de perfil
    const savedPhoto = localStorage.getItem("profilePhoto");
    if (savedPhoto) {
        profileImg.src = savedPhoto;
    }

    // Carregar dados pessoais
    const savedData = localStorage.getItem("profileData");
    if (savedData) {
        const { name, email, phone } = JSON.parse(savedData);
        document.getElementById("name").value = name;
        document.getElementById("email").value = email;
        document.getElementById("phone").value = phone;
    }
}
