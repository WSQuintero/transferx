import React, { useContext, useEffect, useState } from "react"
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  Switch
} from "react-native"
import { MyContext } from "../context/context"

const Sarlaft = ({ navigation }) => {
  const [numberOfShaldeholders, setNumberOfShaldeholders] = useState(0)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    names: "",
    identificationNumber: "",
    issuePlaceAndDate: "",
    birthDate: "",
    birthCountryAndCity: "",
    nationality: "",
    maritalStatus: "",
    occupation: "",
    residenceAddressAndCity: "",
    email: "",
    cellPhone: "",
    hasPermanentResidencyInAnotherCountry: false,
    hasPermanentResidencyInAnotherCountryTexto: "",
    hasTaxObligationsInAnotherCountry: false,
    usStayDetails: {
      dueToContract183Days: false,
      consecutive31DaysCurrentYear: false,
      previousYear121Days: false,
      secondYear60Days: false
    }
  })
  const { $User, informationUser, token } = useContext(MyContext)
  const [initialStatePersonJuridic, setInitialStatePersonJuridic] = useState({
    occupation2PersonalNatural: "",
    companyName: "",
    jobTitle: "",
    address: "",
    ciiuCode: "",
    economicActivityDescription: "",
    nit: "",
    businessName: "",
    mainOfficeAddress: "",
    branchOfficeAddress: "",
    citymainOfficeAddress: "",
    phonemainOfficeAddress: "",
    citybranchOfficeAddress: "",
    phonebranchOfficeAddress: "",
    companyType: ""
  })
  const [shareholders, setShareholders] = useState({
    shareholdersIdentification: [
      {
        identificationText: "",
        identificationNumber: "",
        fullName: "",
        nationality: "",
        otherNationality: "",
        permanentResidenceInOtherCountry: false,
        permanentResidenceInOtherCountryTexto: "",
        usStayDetails: {
          dueToContract183Days: false,
          consecutive31DaysCurrentYear: false,
          previousYear121Days: false,
          secondYear60Days: false
        },
        percentageParticipation: ""
      }
    ]
  })
  const [initialStateInformationBank, setInitialStateInformationBank] =
    useState({
      politicallyExposedPerson: false,
      InternationalOrgLegalRep: false,
      AdministratorPEPStatus: false,
      AffirmativeResponseDetails: "",
      assets: "",
      liabilities: "",
      monthlyIncome: "",
      monthlyExpenses: "",
      equity: "",
      otherIncome: "",
      otherIncomeDetails: "",
      conductsForeignCurrencyTransactions: false,
      usesFinancialProductsAbroad: false
    })
  const [internationalOperationsType, setInternationalsOperationsType] =
    useState({
      internationalOperationsType: {
        transfers: false,
        other: ""
      }
    })
  const [internationalOperationsDetails, setInternationalOperationsDetails] =
    useState([
      {
        identificationType: "",
        entity: "",
        countryCity: "",
        amountCurrency: ""
      },
      {
        identificationType: "",
        entity: "",
        countryCity: "",
        amountCurrency: ""
      }
    ])
  const [fullNameDeclarations, setFullNameDeclarations] = useState("")
  const [identificationTypeDeclarations, setIdentificationTypeDeclarations] =
    useState("")
  const [
    identificationNumberDeclarations,
    setIdentificationNumberDeclarations
  ] = useState("")
  const [bankAccounts, setBankAccounts] = useState([
    {
      accountNumber: "",
      bankName: "",
      branchOffice: "",
      accountType: ""
    },
    {
      accountNumber: "",
      bankName: "",
      branchOffice: "",
      accountType: ""
    }
  ])
  const [ResourceSourceDetails, setResourceSourceDetails] = useState("")
  const juridicPerson = {
    occupation2PersonalNatural: "Ocupación 2 Personal Natural",
    companyName: "Nombre de la Empresa",
    jobTitle: "Título del Trabajo",
    address: "Dirección",
    ciiuCode: "Código CIIU",
    economicActivityDescription: "Descripción de la Actividad Económica",
    nit: "NIT",
    businessName: "Nombre Comercial",
    mainOfficeAddress: "Dirección Principal",
    branchOfficeAddress: "Dirección Sucursal",
    citymainOfficeAddress: "Ciudad Principal",
    phonemainOfficeAddress: "Teléfono Principal",
    citybranchOfficeAddress: "Ciudad Sucursal",
    phonebranchOfficeAddress: "Teléfono Sucursal",
    companyType: "Tipo de Empresa"
  }
  const labels = {
    firstName: "Primer Nombre",
    lastName: "Apellido",
    names: "Nombres",
    identificationNumber: "Número de Identificación",
    issuePlaceAndDate: "Lugar y Fecha de Expedición",
    birthDate: "Fecha de Nacimiento",
    birthCountryAndCity: "País y Ciudad de Nacimiento",
    nationality: "Nacionalidad",
    maritalStatus: "Estado Civil",
    occupation: "Ocupación",
    residenceAddressAndCity: "Dirección de Residencia y Ciudad",
    email: "Correo Electrónico",
    cellPhone: "Teléfono Celular",
    hasPermanentResidencyInAnotherCountry:
      "Tiene Residencia Permanente en Otro País",
    hasPermanentResidencyInAnotherCountryTexto:
      "Texto sobre Residencia Permanente en Otro País",
    hasTaxObligationsInAnotherCountry:
      "Tiene Obligaciones Tributarias en Otro País",
    usStayDetails: {
      dueToContract183Days: "Debido a contrato por 183 días",
      consecutive31DaysCurrentYear: "Consecutivo 31 días año actual",
      previousYear121Days: "Año anterior 121 días",
      secondYear60Days: "Segundo año 60 días"
    }
  }

  const shareholderLabels = {
    shareholdersIdentification: [
      {
        identificationText: "Tipo de identificación",
        identificationNumber: "Número de identificación",
        fullName: "Nombre completo",
        nationality: "Nacionalidad",
        otherNationality: "Otra nacionalidad",
        permanentResidenceInOtherCountry: "Residencia permanente en otro país",
        permanentResidenceInOtherCountryTexto:
          "Texto sobre residencia permanente en otro país",
        usStayDetails: {
          dueToContract183Days: "Debido a contrato por 183 días",
          consecutive31DaysCurrentYear: "Consecutivo 31 días año actual",
          previousYear121Days: "Año anterior 121 días",
          secondYear60Days: "Segundo año 60 días"
        },
        percentageParticipation: "Porcentaje de participación"
      }
    ]
  }

  const informationBank = {
    politicallyExposedPerson: "Persona Políticamente Expuesta",
    InternationalOrgLegalRep:
      "Representante Legal de Organización Internacional",
    AdministratorPEPStatus: "Estado de Administrador PEP",
    AffirmativeResponseDetails: "Detalles de Respuesta Afirmativa",
    assets: "Activos",
    liabilities: "Pasivos",
    monthlyIncome: "Ingresos Mensuales",
    monthlyExpenses: "Gastos Mensuales",
    equity: "Patrimonio",
    otherIncome: "Otros Ingresos",
    otherIncomeDetails: "Detalles de Otros Ingresos",
    conductsForeignCurrencyTransactions:
      "Realiza transacciones en moneda extranjera",
    usesFinancialProductsAbroad:
      "Utiliza productos financieros en el extranjero"
  }

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }
  const handleInputChangeJuridicPerson = (name, value) => {
    setInitialStatePersonJuridic({
      ...initialStatePersonJuridic,
      [name]: value
    })
  }
  const handleToggleChange = (key) => {
    if (
      key === "hasTaxObligationsInAnotherCountry" ||
      key === "hasPermanentResidencyInAnotherCountry"
    ) {
      setFormData({
        ...formData,
        [key]: !formData[key] // Cambia el valor del estado al valor opuesto
      })
    } else {
      setFormData({
        ...formData,
        usStayDetails: {
          ...formData.usStayDetails,
          [key]: !formData.usStayDetails[key]
        }
      })
    }
  }

  const handleInputChangeShaldeHolder = (ind, key, value) => {
    setShareholders((prevState) => {
      const updatedShareholders = [...prevState.shareholdersIdentification]
      updatedShareholders[ind] = {
        ...updatedShareholders[ind],
        [key]: value
      }
      return { ...prevState, shareholdersIdentification: updatedShareholders }
    })
  }

  const handleBankAccountInputChange = (index, key, value) => {
    setBankAccounts((prevAccounts) => {
      const updatedAccounts = [...prevAccounts]
      updatedAccounts[index] = {
        ...updatedAccounts[index],
        [key]: value
      }
      return updatedAccounts
    })
  }
  const handleUsStayDetailToggleChange = (ind, detailKey, value) => {
    console.log(detailKey, value)
    setShareholders((prevState) => {
      const updatedShareholders = [...prevState.shareholdersIdentification]
      updatedShareholders[ind] = {
        ...updatedShareholders[ind],
        usStayDetails: {
          ...updatedShareholders[ind].usStayDetails,
          [detailKey]: value
        }
      }

      return { ...prevState, shareholdersIdentification: updatedShareholders }
    })
  }
  useEffect(() => {
    console.log(shareholders.shareholdersIdentification)
  }, [shareholders])
  const handleInputChangeInformationBank = (key, value) => {
    setInitialStateInformationBank((prevState) => ({
      ...prevState,
      [key]: value
    }))
  }

  const handleInternationalOperationsTypeChange = (key, value) => {
    setInternationalsOperationsType((prevState) => ({
      ...prevState,
      internationalOperationsType: {
        ...prevState.internationalOperationsType,
        [key]: value
      }
    }))
  }
  const handleInternationalOperationsDetailChange = (index, key, value) => {
    setInternationalOperationsDetails((prevDetails) => {
      const updatedDetails = [...prevDetails]
      updatedDetails[index] = {
        ...updatedDetails[index],
        [key]: value
      }
      return updatedDetails
    })
  }
  const handleSubmit = async () => {
    const finalFormData = new FormData()

    // Adding formData fields
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "usStayDetails") {
        finalFormData.append(`usStayDetails`, value)
      }
    })
    // Itera sobre las entradas del objeto formData
    Object.entries(formData).forEach(([key, value]) => {
      // Agrega la propiedad y su valor al FormData
      if (typeof value === "boolean") {
        // Si el valor es booleano, conviértelo a una cadena "true" o "false"
        finalFormData.append(key, value.toString())
      } else {
        finalFormData.append(key, value)
      }
    })

    // Adding initialStatePersonJuridic fields
    Object.entries(initialStatePersonJuridic).forEach(([key, value]) => {
      finalFormData.append(key, value)
    })

    // Adding shareholdersIdentification

    finalFormData.append(
      "shareholdersIdentification",
      JSON.stringify(shareholders.shareholdersIdentification)
    )

    // Adding initialStateInformationBank fields
    Object.entries(initialStateInformationBank).forEach(([key, value]) => {
      finalFormData.append(key, value)
    })

    // Adding bankAccounts
    finalFormData.append("bankAccounts", JSON.stringify(bankAccounts))

    // Adding other fields
    const conductsForeignCurrencyTransactionsType = {
      imports: internationalOperationsType.internationalOperationsType.imports,
      exports: internationalOperationsType.internationalOperationsType.exports
    }
    finalFormData.append(
      "conductsForeignCurrencyTransactionsType",
      JSON.stringify(conductsForeignCurrencyTransactionsType)
    )

    const internationalOperationsTypeData = {
      transfers:
        internationalOperationsType.internationalOperationsType.transfers,
      other: internationalOperationsType.internationalOperationsType.other
    }

    finalFormData.append(
      "internationalOperationsType",
      JSON.stringify(internationalOperationsTypeData)
    )

    finalFormData.append(
      "internationalOperationsTypeText",
      internationalOperationsType.internationalOperationsTypeText
    )
    finalFormData.append("fullNameDeclarations", fullNameDeclarations)
    finalFormData.append(
      "identificationTypeDeclarations",
      identificationTypeDeclarations
    )
    finalFormData.append(
      "identificationNumberDeclarations",
      identificationNumberDeclarations
    )
    finalFormData.append("ResourceSourceDetails", ResourceSourceDetails)
    finalFormData.append(
      "internationalOperationsDetails",
      JSON.stringify(internationalOperationsDetails)
    )
    // Now the FormData object is ready
    // You can send this FormData object to the server

    const send = await $User.sendSarlaft(token, finalFormData)
    // if (send.status) {
    //   navigation.navigate(
    //     informationUser?.user?.number_account_bank_transfer
    //       ? "exchange"
    //       : "SelectInformationBankView"
    //   )
    // } else {
    //   console.log(send.data)
    // }
    console.log(send.data)
    navigation.navigate("newExchange")
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Para continuar, por favor ayúdanos a llenar los siguientes datos
      </Text>
      <Text style={styles.subtitle}>Información del titular</Text>
      {Object.keys(formData).map((key, index) => {
        if (key === "usStayDetails") {
          return (
            <View key={index}>
              <Text style={styles.label}>
                Detalles de Estadía en Estados Unidos
              </Text>
              {Object.keys(formData.usStayDetails).map(
                (detailKey, detailIndex) => (
                  <View key={detailIndex} style={styles.inputContainer}>
                    <Text style={styles.label}>
                      {labels.usStayDetails[detailKey]}
                    </Text>
                    <Switch
                      value={formData.usStayDetails[detailKey]}
                      onValueChange={() => handleToggleChange(detailKey)}
                    />
                  </View>
                )
              )}
            </View>
          )
        } else {
          return (
            <View key={index} style={styles.inputContainer}>
              <Text style={styles.label}>{labels[key]}</Text>
              {key === "hasTaxObligationsInAnotherCountry" ||
              key === "hasPermanentResidencyInAnotherCountry" ? (
                <Switch
                  value={formData[key]}
                  onValueChange={() => handleToggleChange(key)}
                />
              ) : (
                <TextInput
                  style={styles.input}
                  value={formData[key]}
                  onChangeText={(value) => handleInputChange(key, value)}
                />
              )}
            </View>
          )
        }
      })}
      <Text style={styles.subtitle}>
        Información representante persona jurídica
      </Text>
      {Object.keys(juridicPerson).map((key, index) => (
        <View key={index} style={styles.inputContainer}>
          <Text style={styles.label}>{juridicPerson[key]}</Text>
          <TextInput
            style={styles.input}
            value={initialStatePersonJuridic[key]}
            onChangeText={(value) => handleInputChangeJuridicPerson(key, value)}
          />
        </View>
      ))}

      <Text style={styles.subtitle}>Información accionistas</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Número de accionistas</Text>
        <TextInput
          style={styles.input}
          value={numberOfShaldeholders?.toString()}
          onChangeText={(value) => {
            // Verificar si el valor ingresado es un número válido
            const newValue = parseInt(value)
            if (!isNaN(newValue) && newValue >= 0) {
              setNumberOfShaldeholders(newValue)
            } else {
              // Si el valor no es válido, establecer en 0
              setNumberOfShaldeholders("0")
            }
          }}
          keyboardType="numeric"
        />
      </View>

      {Array.from({ length: numberOfShaldeholders }, (_, index) => index).map(
        (__, ind) => (
          <View key={ind}>
            <Text style={styles.subtitle}>{`Accionista ${ind + 1}`}</Text>
            {Object.keys(shareholderLabels.shareholdersIdentification[0]).map(
              (a, i) => {
                return (
                  <View
                    key={shareholderLabels.shareholdersIdentification[0][a]}>
                    <Text style={styles.label}>
                      {a !== "usStayDetails" &&
                        shareholderLabels.shareholdersIdentification[0][a]}
                    </Text>
                    <>
                      {a !== "usStayDetails" && (
                        <TextInput
                          style={styles.input}
                          value={
                            shareholders.shareholdersIdentification[ind] &&
                            shareholders.shareholdersIdentification[ind][a]
                          }
                          onChangeText={(value) =>
                            handleInputChangeShaldeHolder(ind, a, value)
                          }
                        />
                      )}
                      {a === "usStayDetails" && (
                        <>
                          {shareholders?.shareholdersIdentification[ind] &&
                            Object.keys(
                              shareholders.shareholdersIdentification[ind][a]
                            ).map((detailValue, detailIndex) => (
                              <View
                                key={detailValue + ind}
                                style={styles.inputContainer}>
                                <Text style={styles.label}>{detailValue}</Text>
                                <Switch
                                  value={
                                    shareholders.shareholdersIdentification[
                                      ind
                                    ] &&
                                    shareholders.shareholdersIdentification[
                                      ind
                                    ]["usStayDetails"][detailValue]
                                  }
                                  onValueChange={(value) =>
                                    handleUsStayDetailToggleChange(
                                      ind,
                                      detailValue,
                                      value
                                    )
                                  }
                                />
                              </View>
                            ))}
                        </>
                      )}
                    </>
                  </View>
                )
              }
            )}
          </View>
        )
      )}
      <Text style={styles.subtitle}>Información bancaria titular</Text>
      {Object.keys(informationBank).map((key, index) => (
        <View key={index} style={styles.inputContainer}>
          <Text style={styles.label}>{informationBank[key]}</Text>
          {key === "politicallyExposedPerson" ||
          key === "InternationalOrgLegalRep" ||
          key === "AdministratorPEPStatus" ||
          key === "conductsForeignCurrencyTransactions" ||
          key === "usesFinancialProductsAbroad" ? (
            <Switch
              value={initialStateInformationBank[key]}
              onValueChange={(value) =>
                handleInputChangeInformationBank(key, value)
              }
            />
          ) : (
            <TextInput
              style={styles.input}
              value={initialStateInformationBank[key]}
              onChangeText={(value) =>
                handleInputChangeInformationBank(key, value)
              }
            />
          )}
        </View>
      ))}
      <Text style={styles.subtitle}>Información de cuentas bancarias</Text>
      {bankAccounts.map((account, index) => (
        <View key={index} style={styles.inputContainer}>
          <Text style={styles.label}>Cuenta bancaria {index + 1}</Text>
          <TextInput
            style={styles.input}
            value={account.accountNumber}
            onChangeText={(value) =>
              handleBankAccountInputChange(index, "accountNumber", value)
            }
            placeholder="Número de cuenta"
            placeholderTextColor="#A9A9A9"
          />
          <TextInput
            style={styles.input}
            value={account.bankName}
            onChangeText={(value) =>
              handleBankAccountInputChange(index, "bankName", value)
            }
            placeholder="Nombre del banco"
            placeholderTextColor="#A9A9A9"
          />
          <TextInput
            style={styles.input}
            value={account.branchOffice}
            onChangeText={(value) =>
              handleBankAccountInputChange(index, "branchOffice", value)
            }
            placeholder="Sucursal"
            placeholderTextColor="#A9A9A9"
          />
          <TextInput
            style={styles.input}
            value={account.accountType}
            onChangeText={(value) =>
              handleBankAccountInputChange(index, "accountType", value)
            }
            placeholder="Tipo de cuenta"
            placeholderTextColor="#A9A9A9"
          />
        </View>
      ))}
      <View style={styles.inputContainer}>
        <Text style={styles.subtitle}>Tipo de operaciones internacionales</Text>
        <View>
          <Text style={styles.label}>Transferencias</Text>
          <Switch
            value={
              internationalOperationsType.internationalOperationsType.transfers
            }
            onValueChange={(value) =>
              handleInternationalOperationsTypeChange("transfers", value)
            }
          />
        </View>
        <View style={styles.switchContainer}>
          <Text style={styles.label}>Otro</Text>
          <TextInput
            style={styles.input}
            value={
              internationalOperationsType.internationalOperationsType.other
            }
            onChangeText={(value) =>
              handleInternationalOperationsTypeChange("other", value)
            }
          />
        </View>
      </View>
      <View style={styles.additionalInfoContainer}>
        <Text style={styles.subtitle}>
          Detalles de operaciones internacionales
        </Text>

        {internationalOperationsDetails.map((detail, index) => (
          <View key={index} style={styles.inputContainer}>
            <Text style={styles.label}>Tipo de identificación</Text>
            <TextInput
              style={styles.input}
              value={detail.identificationType}
              onChangeText={(value) =>
                handleInternationalOperationsDetailChange(
                  index,
                  "identificationType",
                  value
                )
              }
            />
            <Text style={styles.label}>Entidad</Text>
            <TextInput
              style={styles.input}
              value={detail.entity}
              onChangeText={(value) =>
                handleInternationalOperationsDetailChange(
                  index,
                  "entity",
                  value
                )
              }
            />
            <Text style={styles.label}>País y Ciudad</Text>
            <TextInput
              style={styles.input}
              value={detail.countryCity}
              onChangeText={(value) =>
                handleInternationalOperationsDetailChange(
                  index,
                  "countryCity",
                  value
                )
              }
            />
            <Text style={styles.label}>Cantidad y Moneda</Text>
            <TextInput
              style={styles.input}
              value={detail.amountCurrency}
              onChangeText={(value) =>
                handleInternationalOperationsDetailChange(
                  index,
                  "amountCurrency",
                  value
                )
              }
            />
          </View>
        ))}
        <Text style={styles.label}>Nombre completo declarante</Text>
        <TextInput
          style={styles.input}
          value={fullNameDeclarations}
          onChangeText={(value) => setFullNameDeclarations(value)}
        />
        <Text style={styles.label}>Tipo de identificación declarante</Text>
        <TextInput
          style={styles.input}
          value={identificationTypeDeclarations}
          onChangeText={(value) => setIdentificationTypeDeclarations(value)}
        />
        <Text style={styles.label}>Número de identificación declarante</Text>
        <TextInput
          style={styles.input}
          value={identificationNumberDeclarations}
          onChangeText={(value) => setIdentificationNumberDeclarations(value)}
        />
        <Text style={styles.label}>Detalles de fuente de recursos</Text>
        <TextInput
          style={styles.input}
          value={ResourceSourceDetails}
          onChangeText={(value) => setResourceSourceDetails(value)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
      {/* Espacio adicional para que el botón se muestre completamente */}
      <View style={{ height: 100 }} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#10231D",
    paddingHorizontal: 20,
    paddingTop: 20
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    marginTop: 50
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#C3F53C",
    marginBottom: 20,
    marginTop: 50
  },
  inputContainer: {
    marginBottom: 10
  },
  label: {
    color: "#fff",
    marginBottom: 5
  },
  input: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#C3F53C",
    borderRadius: 5,
    color: "#fff",
    padding: 10
  },
  button: {
    backgroundColor: "#C3F53C",
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: "center",
    marginTop: 20
  },
  buttonText: {
    color: "#10231D",
    fontSize: 18,
    fontWeight: "bold"
  }
})

export default Sarlaft
