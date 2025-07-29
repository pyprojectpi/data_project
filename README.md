# 🧠 Employee Attrition Analysis using Logistic Regression

## 📌 Problem Statement

Employee attrition (churn) is a significant challenge in any organization. Retaining valuable employees is crucial for company growth, performance, and cost management.  
The goal of this project is to **predict whether an employee will leave the company or not**, based on various features like:

- Age  
- Monthly Income  
- Job Role  
- Distance from Home  
- Job Satisfaction  
- Promotion in Last 5 Years  
- Years at Company  
... and more.

We use a **Logistic Regression model** to identify and interpret which factors influence attrition the most.

---

## 📚 Dataset

- **Source**: IBM HR Analytics Employee Attrition Dataset  
- **Link**: [Kaggle - IBM HR Analytics Dataset](https://www.kaggle.com/datasets/pavansubhasht/ibm-hr-analytics-attrition-dataset)
- **Shape**: 1470 rows × 35 columns  
- **Target Variable**: `Attrition` (Yes/No)

---

## 🛠️ Tools & Libraries Used

| Tool         | Purpose                                  |
|--------------|-------------------------------------------|
| Python       | Scripting & analysis                      |
| Pandas       | Data manipulation                         |
| Matplotlib   | Data visualization                        |
| Seaborn      | Advanced visualization                    |
| Scikit-learn | Machine learning pipeline & evaluation    |

---

## 🔍 Project Workflow

1. **Import libraries**  
2. **Download and load dataset**  
3. **EDA (Exploratory Data Analysis)**  
4. **Data cleaning & preprocessing**  
5. **Feature encoding (LabelEncoder / OneHotEncoder)**  
6. **Train-test split**  
7. **Train Logistic Regression model**  
8. **Evaluate model using accuracy, precision, recall, F1-score**  
9. **Plot confusion matrix & feature importance**  
10. **Draw conclusion**

---

## 📈 Model Performance Metrics

- **Accuracy**: ~80%  
- **Precision / Recall / F1-score**: Reported for each class  
- **Confusion Matrix**: Visualized with heatmap

---

## ✅ Conclusion

This project successfully demonstrates how Logistic Regression can be used to identify and predict employee attrition with good accuracy. From the feature importance, we can see that **Work-Life Balance, OverTime, Age, and Job Role** significantly influence attrition decisions.

Such insights help HR teams **design better retention strategies** and take proactive steps to improve employee satisfaction and reduce attrition rates.

---

## 🚀 Future Improvements

- Use advanced models like Random Forest, XGBoost, or Neural Networks  
- Hyperparameter tuning  
- Use SHAP for more interpretable feature contributions  
- Build a Streamlit app to allow HR teams to input employee info and get predictions live

---

## 👨‍💻 Author

**Surya A**  
Final Year ECE Student | Python Developer | ML Enthusiast  
[LinkedIn](https://www.linkedin.com/in/surya-a-luci/) 

---
