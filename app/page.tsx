"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Video, Sparkles, Users, Target, Play, Hash, MessageSquare, Eye, DollarSign } from "lucide-react"

// --- Componentes Auxiliares (Sin cambios aquí) ---

const ModernInput = ({
  id,
  name, // Se añade 'name' para la integración con el formulario
  label,
  type = "text",
  value,
  onChange,
  required = false,
  placeholder = "",
}: {
  id: string
  name: string
  label: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  placeholder?: string
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const hasValue = value.length > 0

  return (
    <div className="relative group">
      <input
        id={id}
        name={name} // Se usa el prop 'name'
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full px-4 py-4 bg-gradient-to-br from-card/50 to-card/30 border border-border/30 rounded-xl text-foreground placeholder-transparent focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 backdrop-blur-sm hover:border-border/50"
      />
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
          isFocused || hasValue ? "top-2 text-xs text-accent font-medium" : "top-4 text-sm text-muted-foreground"
        }`}
      >
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  )
}

const ModernTextarea = ({
  id,
  name, // Se añade 'name' para la integración
  label,
  value,
  onChange,
  required = false,
  rows = 3,
  placeholder = "",
}: {
  id: string
  name: string
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  required?: boolean
  rows?: number
  placeholder?: string
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const hasValue = value.length > 0

  return (
    <div className="relative group">
      <textarea
        id={id}
        name={name} // Se usa el prop 'name'
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full px-4 py-4 bg-gradient-to-br from-card/50 to-card/30 border border-border/30 rounded-xl text-foreground placeholder-transparent focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 backdrop-blur-sm hover:border-border/50 resize-none"
      />
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
          isFocused || hasValue ? "top-2 text-xs text-accent font-medium" : "top-4 text-sm text-muted-foreground"
        }`}
      >
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  )
}

const RadioCard = ({
  value,
  selectedValue,
  onChange,
  children,
  icon,
}: {
  value: string
  selectedValue: string
  onChange: (value: string) => void
  children: React.ReactNode
  icon?: React.ReactNode
}) => {
  const isSelected = selectedValue === value
  return (
    <div
      onClick={() => onChange(value)}
      className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 group ${
        isSelected
          ? "border-accent bg-gradient-to-br from-accent/10 to-accent/5 shadow-lg shadow-accent/20"
          : "border-border/30 bg-gradient-to-br from-card/50 to-card/30 hover:border-accent/50 hover:shadow-md"
      }`}
    >
      <div className="flex items-center gap-3">
        {icon && (
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
              isSelected
                ? "bg-gradient-to-br from-accent to-accent/80 text-accent-foreground shadow-lg shadow-accent/25"
                : "bg-gradient-to-br from-muted/50 to-muted/30 text-muted-foreground border border-border/20"
            }`}
          >
            {icon}
          </div>
        )}
        <div className="flex-1">
          <div
            className={`text-sm font-medium transition-colors duration-300 ${
              isSelected ? "text-accent" : "text-foreground"
            }`}
          >
            {children}
          </div>
        </div>
        <div
          className={`w-5 h-5 rounded-full border-2 transition-all duration-300 ${
            isSelected
              ? "border-accent bg-accent shadow-lg shadow-accent/25"
              : "border-border/50 group-hover:border-accent/50"
          }`}
        >
          {isSelected && (
            <div className="w-full h-full rounded-full bg-accent-foreground scale-50 transition-transform duration-300" />
          )}
        </div>
      </div>
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  )
}

const CheckboxCard = ({
  checked,
  onChange,
  children,
  icon,
}: {
  checked: boolean
  onChange: (checked: boolean) => void
  children: React.ReactNode
  icon?: React.ReactNode
}) => {
  return (
    <div
      onClick={() => onChange(!checked)}
      className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 group ${
        checked
          ? "border-accent bg-gradient-to-br from-accent/10 to-accent/5 shadow-lg shadow-accent/20"
          : "border-border/30 bg-gradient-to-br from-card/50 to-card/30 hover:border-accent/50 hover:shadow-md"
      }`}
    >
      <div className="flex items-center gap-3">
        {icon && (
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
              checked
                ? "bg-gradient-to-br from-accent to-accent/80 text-accent-foreground shadow-lg shadow-accent/25"
                : "bg-gradient-to-br from-muted/50 to-muted/30 text-muted-foreground border border-border/20"
            }`}
          >
            {icon}
          </div>
        )}
        <div className="flex-1">
          <div
            className={`text-sm font-medium transition-colors duration-300 ${
              checked ? "text-accent" : "text-foreground"
            }`}
          >
            {children}
          </div>
        </div>
        <div
          className={`w-5 h-5 rounded border-2 transition-all duration-300 ${
            checked
              ? "border-accent bg-accent shadow-lg shadow-accent/25"
              : "border-border/50 group-hover:border-accent/50"
          }`}
        >
          {checked && <CheckCircle className="w-full h-full text-accent-foreground scale-75" />}
        </div>
      </div>
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  )
}

const SectionDivider = () => (
  <div className="relative py-8">
    <div className="absolute inset-0 flex items-center">
      <div className="w-full border-t border-gradient-to-r from-transparent via-border/50 to-transparent"></div>
    </div>
    <div className="relative flex justify-center">
      <div className="w-12 h-1 bg-gradient-to-r from-accent to-accent/80 rounded-full shadow-lg shadow-accent/25"></div>
    </div>
  </div>
)

export default function VideoEditorForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    socialHandle: "",
    niche: "",
    videoPurpose: "",
    videoPurposeOther: "",
    targetAudience: "",
    callToAction: "",
    editingStyle: "",
    referenceVideos: "",
    brandGuidelines: "",
    finalVideoDuration: "",
    distribution: [] as string[],
    budgetType: "",
    budget: "",
  })

  const [showCustomQuestions, setShowCustomQuestions] = useState(false)
  const [showBudgetOptions, setShowBudgetOptions] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false); // Estado para el botón de carga

  const handleStyleChange = (value: string) => {
    setFormData((prev) => ({ ...prev, editingStyle: value }))
    setShowCustomQuestions(value === "personalizado")
  }

  const handleBudgetTypeChange = (value: string) => {
    setFormData((prev) => ({ ...prev, budgetType: value, budget: "" }))
    setShowBudgetOptions(value)
  }

  const handleDistributionChange = (platform: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      distribution: checked ? [...prev.distribution, platform] : prev.distribution.filter((p) => p !== platform),
    }))
  }

  // --- CAMBIO PRINCIPAL AQUÍ ---
  // Esta función ahora envía los datos a Formspree en segundo plano.
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Previene que la página se recargue
    setIsSubmitting(true); // Deshabilita el botón y muestra estado de carga

    // Prepara los datos para ser enviados. Unimos el array en un string para mejor visualización.
    const dataToSend = {
      ...formData,
      distribution: formData.distribution.join(', '),
    };

    try {
      const response = await fetch("https://formspree.io/f/movnqawg", {
        method: "POST",
        body: JSON.stringify(dataToSend),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        // Si el envío es exitoso, muestra tu pantalla de agradecimiento
        setIsSubmitted(true);
      } else {
        // Si hay un error, puedes mostrar un mensaje al usuario
        alert("Hubo un error al enviar tu solicitud. Por favor, intenta de nuevo.");
      }
    } catch (error) {
      // Maneja errores de red
      console.error("Error de red al enviar el formulario:", error);
      alert("Hubo un error de red. Por favor, revisa tu conexión e intenta de nuevo.");
    } finally {
        setIsSubmitting(false); // Vuelve a habilitar el botón
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <Card className="max-w-md w-full text-center glass-card">
          <CardContent className="pt-6 pb-6">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center shadow-lg shadow-accent/25">
                <CheckCircle className="w-6 h-6 text-accent-foreground" />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
              ¡Gracias!
            </h2>
            <p className="text-sm text-muted-foreground mb-3">
              He recibido tu solicitud. Revisaré los detalles y te contactaré en las próximas 24 horas para dar los
              siguientes pasos.
            </p>
            <p className="text-accent font-medium text-sm">¡Estoy emocionado por ayudarte a crecer tu marca!</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/50 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3 mb-2">
            <img src="/logo.png" alt="Logo" className="w-10 h-10 rounded-lg object-cover shadow-lg shadow-accent/25" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent/80 rounded-lg flex items-center justify-center shadow-lg shadow-accent/25">
                <Play className="w-4 h-4 text-accent-foreground" />
              </div>
              <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Edición de Video para Marcas Personales
              </h1>
            </div>
          </div>
          <p className="text-muted-foreground text-sm">
            ¡Hola, creador! Este formulario está diseñado para entender tus metas y crear contenido vertical que impulse
            tu marca personal. Complétalo para que podamos empezar a crear videos que capturen la atención.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4 space-y-6 py-6">
        {/* El onSubmit ahora llama a nuestra nueva función handleSubmit */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <Card className="bg-gray-900/50 border-gray-700/30 backdrop-blur-sm hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-br from-accent to-accent/80 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-accent-foreground" />
                </div>
                <CardTitle className="text-lg bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  Parte A: ¿Quién eres?
                </CardTitle>
                <Badge variant="destructive" className="text-xs bg-gradient-to-r from-accent to-accent/80">
                  Requerido
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <ModernInput
                id="fullName"
                name="fullName" // Atributo 'name' añadido
                label="Tu Nombre"
                value={formData.fullName}
                onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
                required
              />
              <ModernInput
                id="email"
                name="email" // Atributo 'name' añadido
                label="Tu Correo Electrónico"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                required
              />
              <ModernInput
                id="socialHandle"
                name="socialHandle" // Atributo 'name' añadido
                label="Tu @usuario principal (Instagram/TikTok)"
                value={formData.socialHandle}
                onChange={(e) => setFormData((prev) => ({ ...prev, socialHandle: e.target.value }))}
                placeholder="@tunombredeusuario"
              />
              <ModernInput
                id="niche"
                name="niche" // Atributo 'name' añadido
                label="¿Cuál es tu nicho?"
                value={formData.niche}
                onChange={(e) => setFormData((prev) => ({ ...prev, niche: e.target.value }))}
                placeholder="Ej: Fitness, Finanzas, Marketing, etc."
              />
            </CardContent>
          </Card>

          <SectionDivider />

          <Card className="bg-gray-900/50 border-gray-700/30 backdrop-blur-sm hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300">
            <CardHeader className="pb-4">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-accent to-accent/80 rounded-lg flex items-center justify-center">
                        <Target className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <CardTitle className="text-lg bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                        Parte B: ¿Qué quieres lograr?
                    </CardTitle>
                </div>
            </CardHeader>
            <CardContent className="space-y-6">
                <div>
                    <div className="flex items-center gap-2 mb-3">
                        <h3 className="text-sm font-medium text-foreground">¿Cuál es el objetivo principal de tus videos?</h3>
                        <Badge variant="destructive" className="text-xs bg-gradient-to-r from-accent to-accent/80">
                            Requerido
                        </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-4">
                        Esto nos ayuda a enfocar la edición para obtener resultados.
                    </p>
                    <div className="space-y-3">
                        <RadioCard
                            value="Aumentar seguidores y alcance"
                            selectedValue={formData.videoPurpose}
                            onChange={(value) => setFormData((prev) => ({ ...prev, videoPurpose: value }))}
                            icon={<Users className="w-5 h-5" />}
                        >
                            Aumentar seguidores y alcance
                        </RadioCard>
                        <RadioCard
                            value="Construir autoridad en mi nicho"
                            selectedValue={formData.videoPurpose}
                            onChange={(value) => setFormData((prev) => ({ ...prev, videoPurpose: value }))}
                            icon={<Target className="w-5 h-5" />}
                        >
                            Construir autoridad en mi nicho
                        </RadioCard>
                        <RadioCard
                            value="Promocionar un producto/servicio"
                            selectedValue={formData.videoPurpose}
                            onChange={(value) => setFormData((prev) => ({ ...prev, videoPurpose: value }))}
                            icon={<DollarSign className="w-5 h-5" />}
                        >
                            Promocionar un producto/servicio (curso, coaching, etc.)
                        </RadioCard>
                        <RadioCard
                            value="Generar engagement"
                            selectedValue={formData.videoPurpose}
                            onChange={(value) => setFormData((prev) => ({ ...prev, videoPurpose: value }))}
                            icon={<MessageSquare className="w-5 h-5" />}
                        >
                            Generar 'engagement' (comentarios/guardados)
                        </RadioCard>
                        <RadioCard
                            value="Otro"
                            selectedValue={formData.videoPurpose}
                            onChange={(value) => setFormData((prev) => ({ ...prev, videoPurpose: value }))}
                            icon={<Hash className="w-5 h-5" />}
                        >
                            Otro (por favor especifica)
                        </RadioCard>
                    </div>
                    {formData.videoPurpose === "Otro" && (
                        <div className="mt-4">
                            <ModernInput
                                id="videoPurposeOther"
                                name="videoPurposeOther" // Atributo 'name' añadido
                                label="Especifica tu objetivo"
                                value={formData.videoPurposeOther}
                                onChange={(e) => setFormData((prev) => ({ ...prev, videoPurposeOther: e.target.value }))}
                                placeholder="Tu respuesta"
                            />
                        </div>
                    )}
                </div>

                <ModernTextarea
                    id="targetAudience"
                    name="targetAudience" // Atributo 'name' añadido
                    label="¿A quién le hablas en tus videos? (Describe a tu seguidor ideal)"
                    value={formData.targetAudience}
                    onChange={(e) => setFormData((prev) => ({ ...prev, targetAudience: e.target.value }))}
                    required
                    rows={3}
                />

                <ModernInput
                    id="callToAction"
                    name="callToAction" // Atributo 'name' añadido
                    label="¿Qué quieres que la gente haga después de ver tus videos?"
                    value={formData.callToAction}
                    onChange={(e) => setFormData((prev) => ({ ...prev, callToAction: e.target.value }))}
                    required
                    placeholder="Ej: Sígueme, comenta 'X', ve al link en mi bio..."
                />
            </CardContent>
          </Card>

          <SectionDivider />

          <Card className="bg-gray-900/50 border-gray-700/30 backdrop-blur-sm hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300">
            <CardHeader className="pb-4">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-accent to-accent/80 rounded-lg flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <CardTitle className="text-lg bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                        Parte C: ¿Cómo quieres que se vean tus videos?
                    </CardTitle>
                </div>
            </CardHeader>
            <CardContent className="space-y-6">
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <h3 className="text-sm font-medium text-foreground">¿Qué estilo de edición estás buscando?</h3>
                        <Badge variant="destructive" className="text-xs bg-gradient-to-r from-accent to-accent/80">
                            Requerido
                        </Badge>
                    </div>
                    <div className="space-y-3">
                        <RadioCard
                            value="portfolio"
                            selectedValue={formData.editingStyle}
                            onChange={handleStyleChange}
                            icon={<Eye className="w-5 h-5" />}
                        >
                            El estilo que vi en tus redes
                        </RadioCard>
                        <RadioCard
                            value="personalizado"
                            selectedValue={formData.editingStyle}
                            onChange={handleStyleChange}
                            icon={<Sparkles className="w-5 h-5" />}
                        >
                            Un estilo diferente / personalizado para mi marca
                        </RadioCard>
                    </div>
                </div>

                {showCustomQuestions && (
                    <div className="space-y-6 p-6 bg-gray-800/50 rounded-xl border border-red-500/20 backdrop-blur-sm">
                        <ModernTextarea
                            id="referenceVideos"
                            name="referenceVideos" // Atributo 'name' añadido
                            label="¿Hay creadores cuyo estilo de edición te encante? (Pega los enlaces a 1-3 videos de referencia)"
                            value={formData.referenceVideos}
                            onChange={(e) => setFormData((prev) => ({ ...prev, referenceVideos: e.target.value }))}
                            rows={3}
                            placeholder="Enlaces a Reels, TikToks, Shorts..."
                        />
                        <ModernTextarea
                            id="brandGuidelines"
                            name="brandGuidelines" // Atributo 'name' añadido
                            label="¿Tienes colores, fuentes o logos específicos para tu marca personal?"
                            value={formData.brandGuidelines}
                            onChange={(e) => setFormData((prev) => ({ ...prev, brandGuidelines: e.target.value }))}
                            rows={2}
                            placeholder="Descríbelos o indica dónde puedo verlos..."
                        />
                    </div>
                )}
            </CardContent>
          </Card>

          <SectionDivider />

          <Card className="bg-gray-900/50 border-gray-700/30 backdrop-blur-sm hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300">
            <CardHeader className="pb-4">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-accent to-accent/80 rounded-lg flex items-center justify-center">
                        <Video className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <CardTitle className="text-lg bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                        Parte D: Detalles del Video
                    </CardTitle>
                </div>
            </CardHeader>
            <CardContent className="space-y-6">
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <h3 className="text-sm font-medium text-foreground">¿Duración final del video?</h3>
                        <Badge variant="destructive" className="text-xs bg-gradient-to-r from-accent to-accent/80">
                            Requerido
                        </Badge>
                    </div>
                    <div className="space-y-3">
                        <RadioCard
                            value="15-30s"
                            selectedValue={formData.finalVideoDuration}
                            onChange={(value) => setFormData((prev) => ({ ...prev, finalVideoDuration: value }))}
                            icon={<Video className="w-5 h-5" />}
                        >
                            15-30 segundos
                        </RadioCard>
                        <RadioCard
                            value="30-60s"
                            selectedValue={formData.finalVideoDuration}
                            onChange={(value) => setFormData((prev) => ({ ...prev, finalVideoDuration: value }))}
                            icon={<Video className="w-5 h-5" />}
                        >
                            30-60 segundos
                        </RadioCard>
                    </div>
                </div>

                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <h3 className="text-sm font-medium text-foreground">¿Para qué plataformas es el video?</h3>
                        <Badge variant="destructive" className="text-xs bg-gradient-to-r from-accent to-accent/80">
                            Requerido
                        </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-4">Selecciona todas las que apliquen.</p>
                    <div className="space-y-3">
                        {[
                            { name: "Instagram Reels", icon: <Video className="w-5 h-5" /> },
                            { name: "TikTok", icon: <Play className="w-5 h-5" /> },
                            { name: "YouTube Shorts", icon: <Video className="w-5 h-5" /> },
                        ].map((platform) => (
                            <CheckboxCard
                                key={platform.name}
                                checked={formData.distribution.includes(platform.name)}
                                onChange={(checked) => handleDistributionChange(platform.name, checked)}
                                icon={platform.icon}
                            >
                                {platform.name}
                            </CheckboxCard>
                        ))}
                    </div>
                </div>
            </CardContent>
          </Card>

          <SectionDivider />

          <Card className="bg-gray-900/50 border-gray-700/30 backdrop-blur-sm hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300">
            <CardHeader className="pb-4">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-accent to-accent/80 rounded-lg flex items-center justify-center">
                        <DollarSign className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <CardTitle className="text-lg bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                        Parte E: Inversión
                    </CardTitle>
                </div>
            </CardHeader>
            <CardContent className="space-y-6">
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <h3 className="text-sm font-medium text-foreground">¿Cómo prefieres enfocar la inversión?</h3>
                        <Badge variant="destructive" className="text-xs bg-gradient-to-r from-accent to-accent/80">
                            Requerido
                        </Badge>
                    </div>
                    <div className="space-y-3">
                        <RadioCard
                            value="per-video"
                            selectedValue={formData.budgetType}
                            onChange={handleBudgetTypeChange}
                            icon={<Video className="w-5 h-5" />}
                        >
                            Presupuesto por video
                        </RadioCard>
                        <RadioCard
                            value="monthly-package"
                            selectedValue={formData.budgetType}
                            onChange={handleBudgetTypeChange}
                            icon={<DollarSign className="w-5 h-5" />}
                        >
                            Paquete mensual (varios videos)
                        </RadioCard>
                    </div>
                </div>

                {showBudgetOptions === "per-video" && (
                    <div className="p-6 bg-gray-800/50 rounded-xl border border-red-500/20 backdrop-blur-sm">
                        <h4 className="text-sm font-medium text-foreground mb-4">¿Cuál es tu presupuesto por video?</h4>
                        <div className="space-y-3">
                            <RadioCard
                                value="<100"
                                selectedValue={formData.budget}
                                onChange={(value) => setFormData((prev) => ({ ...prev, budget: value }))}
                                icon={<DollarSign className="w-5 h-5" />}
                            >
                                Menos de $100 USD
                            </RadioCard>
                            <RadioCard
                                value="100-200"
                                selectedValue={formData.budget}
                                onChange={(value) => setFormData((prev) => ({ ...prev, budget: value }))}
                                icon={<DollarSign className="w-5 h-5" />}
                            >
                                $100 - $200 USD
                            </RadioCard>
                            <RadioCard
                                value="200+"
                                selectedValue={formData.budget}
                                onChange={(value) => setFormData((prev) => ({ ...prev, budget: value }))}
                                icon={<DollarSign className="w-5 h-5" />}
                            >
                                $200+ USD
                            </RadioCard>
                            <RadioCard
                                value="unsure"
                                selectedValue={formData.budget}
                                onChange={(value) => setFormData((prev) => ({ ...prev, budget: value }))}
                                icon={<MessageSquare className="w-5 h-5" />}
                            >
                                Aún no lo sé, me gustaría conocer tus opciones/tarifas
                            </RadioCard>
                        </div>
                    </div>
                )}

                {showBudgetOptions === "monthly-package" && (
                    <div className="p-6 bg-gray-800/50 rounded-xl border border-red-500/20 backdrop-blur-sm">
                        <h4 className="text-sm font-medium text-foreground mb-4">¿Cuál es tu presupuesto mensual?</h4>
                        <div className="space-y-3">
                            <RadioCard
                                value="400-800"
                                selectedValue={formData.budget}
                                onChange={(value) => setFormData((prev) => ({ ...prev, budget: value }))}
                                icon={<DollarSign className="w-5 h-5" />}
                            >
                                $400 - $800 USD
                            </RadioCard>
                            <RadioCard
                                value="800-1500"
                                selectedValue={formData.budget}
                                onChange={(value) => setFormData((prev) => ({ ...prev, budget: value }))}
                                icon={<DollarSign className="w-5 h-5" />}
                            >
                                $800 - $1,500 USD
                            </RadioCard>
                            <RadioCard
                                value="1500+"
                                selectedValue={formData.budget}
                                onChange={(value) => setFormData((prev) => ({ ...prev, budget: value }))}
                                icon={<DollarSign className="w-5 h-5" />}
                            >
                                $1,500+ USD
                            </RadioCard>
                            <RadioCard
                                value="unsure"
                                selectedValue={formData.budget}
                                onChange={(value) => setFormData((prev) => ({ ...prev, budget: value }))}
                                icon={<MessageSquare className="w-5 h-5" />}
                            >
                                Aún no lo sé, me gustaría conocer tus opciones/tarifas
                            </RadioCard>
                        </div>
                    </div>
                )}
            </CardContent>
          </Card>

          <div className="flex justify-center pt-6">
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting} // El botón se deshabilita mientras se envía
              className="w-full sm:w-auto px-12 py-4 text-base font-semibold bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-accent/25 hover:shadow-accent/40 rounded-xl disabled:opacity-50 disabled:scale-100"
            >
              <span className="flex items-center gap-2">
                {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
                {!isSubmitting && <CheckCircle className="w-5 h-5" />}
              </span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
